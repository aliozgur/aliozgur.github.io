---
layout: post
title: "A workaround for UIWebView didFinishLoading firing multiple times problem"
subtitle: ""
date:  2011-07-22 15:01
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags: 
  - Software
  - Mobile
  - iOS
---

Here is a stackoverflow question which describes the issue very well

> I have some code that needs to run after the a UIWebView finishes loading a document. For that I've set the UIWebView's delegate to my controller, and implemented the webViewDidFinishLoading method.
> 
> This gets called multiple times, depending on the type of page to load. I'm not sure if it's because of ajax requests, requests for images, or maybe even iframes.
> 
> Is there a way to tell that the main request has finished, meaning the HTML is completely loaded?
> 
> Or perhaps delay my code from firing until all of those events are done firing?

Some people say that "UIWebView must die". Yes I actually agree with them. UIWebView loads slower than Safari, it is hard to use and it does not expose some core methods. For example you can not get source of the loaded HTML page or the document title with a regular method call. But it has its strenghts like the**stringByEvaluatingJavaScriptFromString (MonoTouch equivalent is EvaluateJavascript)** method. With this method you can perform some of the missing core functions.

The idea to solve the mentioned problem goes on like this

1.  Inject javascript to the loaded (or still loading) document
2.  With the enjected javascript check the document ready state
3.  If document is already loaded inject  a hidden input indicating the document is loaded
4.  If document is not loaded yet inject another javascrip which simply binds an anonymous function to window.onload so that we can inject the hidden document loaded indicator input when window.onload is called
5.  As the last step each time didFinishLoading is called/fired try to find the injected document loaded indicator input element by evaluating another javascript
6.  If document loaded indicator input element is in place we can be sure that the whole document is loaded and we can continue with the execution

<div>Here is the injected javascript script code mentiond through steps 1-4</div><pre class="brush:java;">if(document.readyState == 'complete')
{
	var element = document.createElement('input'); 
	element.setAttribute('type','hidden'); 
	element.setAttribute('id','moodlez_documentloaded'); 
	document.body.appendChild(element);
}
else
{
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.setAttribute('id','moodlez_windowload');
  script.text = "window.onload = function(){var element = document.createElement('input'); element.setAttribute('type','hidden'); element.setAttribute('id','moodlez_documentloaded'); document.body.appendChild(element);}";
  document.body.appendChild(script);
}
</pre>

In the above JavaScript code the if(document.readyState == 'complete') block is needed so that we can handle the case when didFinishLoading fires only one time because the HTML page does not contain any frames and other stuff causing multiple  calls to didFinishLoading.

Here is the MonoTouch (C#) code which implements the steps mentioned above

<pre class="brush:java;">public void LoadCompleted ()
{
	// Your code here......

	// check if the hidden document loaded indicator input is present
	jsResult = this.WebView.EvaluateJavascript ("document.getElementById('moodlez_windowload').toString();");

	// hidden element is not present so evaluate the javascript which has the potential to add the element
	if (String.IsNullOrWhiteSpace (jsResult)) 
	{
		string eval = "if(document.readyState == 'complete'){" + Helper.LoadCompleteJs + "}else{" + "var script = document.createElement('script');" + " script.type = 'text/javascript';" + " script.setAttribute('id','moodlez_windowload');" + " script.text = \"window.onload = function(){" + Helper.LoadCompleteJs + "}\";" + " document.body.appendChild(script);" + "}";				
		this.WebView.EvaluateJavascript (eval);
	}

	// Lets check again if the hidden document loaded indicator input is present
	jsResult = this.WebView.EvaluateJavascript ("document.getElementById('moodlez_documentloaded').toString();");

        // document loaded indicator input is not present so this means document did not complete loading	
	if (string.IsNullOrWhiteSpace (jsResult)) 
		return;

	// Your code here, which you want to be executed after document loading si really completed

}

</pre>

Note: Helper.LoadCompleteJs static variable holds the following javascript code string which in turn is loaded from a resource file on application startup

<pre class="brush:java;">var element = document.createElement('input'); 
element.setAttribute('type','hidden'); 
element.setAttribute('id','moodlez_documentloaded'); 
document.body.appendChild(element);
</pre>

This method can be used from Objective-C, just translate the code of LoadComplete method to Objective-C and you are ready to go.