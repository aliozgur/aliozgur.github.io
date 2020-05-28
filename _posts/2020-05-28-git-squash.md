---
layout: post
title: "Git ile Tarihi Yeniden Yazmak"
subtitle: "Commitleri derleyip toplamak"
date:  2020-05-28 09:0
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - Git
  - Tips
  - Programlama

---

Uzun süre üzerinde çalışılan git branch'leri (long lived branch) için doğal olarak çok fazla sayıda commit yapılıyor.
Commit sayısının fazla olmasının temel nedenleri
1. Gün sonunda veya güvenli anlarda yapılan değişikliği kalıcı hale getirmek olabilir
2. Yapılan çalışmanın doğası gereği küçük ve anlamlı parçalar halinde geliştirilmesi olabilir.

Bu ipucu yazımızda özellikle 1. maddede belirttiğim durumda ortaya çıkan git history kirliliğini nasıl ortadan kaldırabileceğimizi paylaşıyorum.

<!--end-of-excerpt-->
Herhangi bir branch'deki commitlerin bir kısmını birleştirip tek bir commit olarak yeniden oluşturmak için yapılan işleme git terminolojisinde **squash** denir.

Squash işlemi ile herhangi bir branch'in historysini (commitleri) değiştirmiş oluruz. History değiştirme işlemi ,normal koşullarda, özellikle **master** gibi resmi branch'lerde doğrudan uygulamadığımız bir yöntem. Bu nedenle squash işlemini merge öncesinde ve sadece **henüz merge etmediğimiz** commitleri birleştirecek şekilde uygulamalıyız.

## Squash Ne Zaman Yapılabilir?

* Üzerinde çalıştığınız kişisel branch henüz **master** veya diğer paylaşılan resmi branchlere merge edilmediyse
* Üzerinde çalıştığınız kişisel branch'ın **master** veya diğer paylaşılan resmi branchlere henüz merge edilmemiş commitleri için yapılabilir
* **master** gibi resmi branchler dışında birden fazla kişinin çalıştığı colloboration branchlerinde diğer kişiler ile koordine olarak

## Squash Ne Zaman Yapılmamalı?
Squash işlemi genel olarak aşağıdaki durumda yapılmamalı.
> Don’t include any commit you’ve already pushed to a central server — doing so will confuse other developers by providing an alternate version of the same change.

## Squash Komutu

Git içinde doğrudan **squash** işlemi için bir komut yok. Bu işlem normalde **rebase** komutunun aşağıdakine benzer bir şekilde kullanımı ile yapılır

```bash
git rebase -i HEAD~3
```

Yukarıdaki komutta yer alan;
* **-i** : Rebase işleminin interaktif (etkileşimli) yapılacağını belirten seçenek
* **HEAD** : Son commitimizi yani branch'imizin başını ifade eder
> Git terminolojisinde history'nin başı zaman ekseninde son yapılan commit tarafından ifade edilebilir. Normal tarihsel akış kavramının tersi söz konusu)
* **~3**: **~N** şeklinde genelleştirilebilir. **N** değeri son commitimizden önceki kaç commiti birleştireceğimizi ifade eder. Örnek komutta son 3 commiti birleştireceğimizi ifade ediyoruz.

Yukarıdaki komutu çalıştırdığımızda karşımıza, eğer bir metin editor ayarladıysak o editorde ayarlamadıysak da komut satırında, belirttiğimiz 3 commit'e ait bilgileri içeren aşağıdakine benzer bir metin çıkacaktır.

```
pick f7f3f6d Change my name a bit
pick 310154e Update README formatting and add blame
pick a5f4a0d Add cat-file

# Rebase 710f0f8..a5f4a0d onto 710f0f8
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

Yukarıdaki metinde **HEAD~3** belirttiğimiz 3 commitimiz son commit en altta olacak şekilde (yukarıda bahsettiğim git history yaklaşımının tersine bu sefer normal history mantığında) listelenir. Her bir commit için, commit hash'inin önündeki komut ile ne yapmak istediğimizi belirtebiliriz. Konumuz squash olduğu için son commit (en alttaki) hariç tüm diğer commitlerimiz için komut olarak **squash** yazıp son commitimizin mesajını da değiştirerek/düzenleyerek etkileşimli rebase işlemini tamamlayabiliriz.

Etkileşimli rebase sonrasında history değiştiği için **push** işlemi yapmaya çalıştığımızda remote sunucu isteğimizi reddedecektir. Bu koşul altında push işlemini tamamlamak için iki seçeneğimiz var

### force
```bash
git push --force
```
**force** komutu tehlikeli bir seçenek o nedenle kullanılmasını **ÖNERMİYORUM**. **force** komutu ile push işlemi yapılırsa üzerinde çalıştığınız branch'a sizden önce başkasının entegre ettiği commitleri de silersiniz. Bu durumda başkasının yaptığı değişiklikleri geri dönülmez şekilde kaybedilmesine neden olabilirsiniz.

### force-with-lease
```bash
git push --force-with-lease
```
**force** komutu yerine **force-with-lease** komutu kullanmanızı **ÖNERİYORUM**. **force-with-lease** komutu ile push işlemi yapılırsa üzerinde çalıştığınız branch'a sizden önce başkasının entegre ettiği commitler korunacaktır.

## Etkileşimli Rebase Alternatifi

Squash işlemini etkileşimli rebase komutunu her defasında yazmadan **squash** isimli bir **git alias** tanımlayarak daha kısa ve basit yazılabilecek şekilde aşağıdaki gibi tanımlayabiliriz.

### Git Bash On Windows

```bash
git config --global alias.squash '!f(){ git reset --soft HEAD~${1} && git commit --edit -m"$(git log --format=%B --reverse HEAD..HEAD@{1})"; };f'
```
### Windows Command Line
```bash
git config --global alias.squash "!f(){ git reset --soft HEAD~${1} && git commit --edit -m\"$(git log --format=%B --reverse HEAD..HEAD@{1})\"; };f"
```
### .gitconfig dosyası içinden

```
[alias]
    squash = "!f(){ git reset --soft HEAD~${1} && git commit --edit -m\"$(git log --format=%B --reverse HEAD..HEAD@{1})\"; };f"
```

Yukarıdaki yöntemlerden bir tanesi ile yapılan **squash** alias'ını aşağıdaki şekilde kullanabilirsiniz.

```bash
git squash 3
```

***
{% include share_twitter_tr.html %}

***
