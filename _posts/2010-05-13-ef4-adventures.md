---
layout: post
title: "Entity Framework 4 (EF4) Adventures"
subtitle: ""
date:  2010-05-13 09:11
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags: 
  - C#
  - .NET
  - Entity Framework  
---


I've been recently working on a smart client (WinForms) application backed by Entitiy Framework 4 (EF4) on Visual Studio 2010\. In this blog post I will try to give you some tips regarding some limitations and points to be careful about EF4.

<!--end-of-excerpt-->

### Why Entity Framework (EF)?  

Through my .NET development career I've used couple of ORM frameworks like NHibernate, LLBLGen and Subsonic. Each framework has some sort of unique approach to ORM. My favourite ORM was, and actually still is, NHibernate. I like the open source nature of NH and the community of NH is very active. LLBLGen was my second popular ORM because the tooling was inplace and entity mappings could be handled easly. Subsonic was minimalist and it was really a joy to develop with Subsonic. But each of these ORM frameworks made me crazy from time to time. To name few of them; configuring NHibernate is really a pain although they have some addins, LLBLGen has some sort of too imperative query constructs and Subsonic is minimalist and sometimes does not fit well while implementing some not so important part (classic %20 part) of a system. Oh I've forgot to mention LinqToSql which was the first shot of Microsoft in the ORM area. I've also used LinqToSql.

Since EF was first announced I've been watching the progress and keep an eye on the experience of people using early EF versions. My first impression was; stay away until next major release. And that major release seems to be EF4\. My answer to the question why EF is

*   EF4 comes as part of  .NET Framework 4\. No extra installation needed
*   EF4 is fully integrated with Visual Studio 2010
*   EF4 Model Designer, incorperated in VS 2010 is nearly fantastic
*   With EF4 you can persist POCO's to supported databases easly
*   With EF4 you can generate your entities from your database schema
*   Complex Types are fancy
*   Function exports (stored procedure support) just work like a charm. Paired with complex types this introduces a real power for brown field projects

### Change EF Connection String At Runtime  

EF4 connection strings are different than usual Sql connection strings. Within EF4 connection string some sort of metadata regarding EF model resources shall be included so that EF can resolve the model and apply the mappings and other stuff you implicitly introduced through the Model Designer. In web application scenarios you likely will not have to worry about changing EF connection string at runtime since Model Designer asks you whether you want to persist the selected connection information in the config file. After that you simply change the sql connection information before you deploy your web app. But in smart client scenarios this technique does not fit well, since you do not want to expose database connection information in the app.config file. Most likely you will keep database connection information in a user specific setting file with some encryption applied since you do not want it to be human readable and when your application is up you will read that information, decode the connection string and use that value to issue a database connection.

Here is a typical Model Designer generated EF connection string

<pre class="brush:xml;">&lt;add name="eXpressOtoEntities" connectionString="metadata=res://*/eXpressOtoEntities.csdl|res://*/eXpressOtoEntities.ssdl|res://*/eXpressOtoEntities.msl;provider=System.Data.SqlClient;provider connection string=&amp;quot;Data Source=D00450065;Initial Catalog=eXpressOto;Integrated Security=True;MultipleActiveResultSets=True&amp;quot;" providerName="System.Data.EntityClient" /&gt;

</pre>

You have to construct a connection string similar to the one above, for practical purposes you can define a factory method which constructs an EF Connection String ans instantiates an ObjectContext for you. Here is the sample method

<pre class="brush:csharp;"> public static eXpressOtoEntities CreateObjectContext()  
 {  
      if (DbConnectionManager.Current == null)  
        throw new Exception("Current database connection is not set on DbConnectionManager");  

      string conStr = "metadata=res://*;provider=System.Data.SqlClient;provider connection string='" + DbConnectionManager.Current.ConnectionString + "'";  
      eXpressOtoEntities ctx = new eXpressOtoEntities(conStr);  
      return ctx;  
 }
 
</pre>

In the above code snippet eXpressOtoEntities, the return type of the method, is my ObjectContext class. DbConnectionManager is a custom static class which is used to encrypt/store, load/decrypt the database connection string. The rest is straight we just perform simple string concat.

### Implementing IDataErrorInfo on your entities

IDataErrorInfo interface is a standard .NET interface residing in System.ComponentModel namespace which provides the functionality to offer custom error information that a user interface can bind to. Most of the WinForms controls, standard or third party, support IDataErrorInfo internally or through the standard .NET ErrorProvider component. If you want to provide error information to the end users regarding any kind of validation directly from the entities layer you just have to implement IDataErrorInfo on your entities, which is simple enough.

EF4 uses T4 templates to generate your entity classes from your model. When you add an entity to your model from your database schema EF runtime, VS2010 actually, uses predefined T4 templates to generate the corresponding entity classes. There are two different ways, as far as I know, you can add extra functionality to your EF entity classes.

1) You can create your own T4 template incorporating IDataErrorInfo and generating default implementation of the interface and feed the EF runtime with this template. This is a little bit complicated issue and I can ensure you that you would not want to enter that process just to have entities supporting IDataErrorInfo. You can read[this post](http://thedatafarm.com/blog/data-access/customizing-edm-code-gen-in-ef4/ "Customizing EDM Code Gen in EF4") for the details.

2) Standard EF T4 template generate partial classes for your entities. Which means you can add functionality to your automatically generated entity classes by simply creating a partial class file. This approach is simple and sufficint for most of the time. Below is a sample partial entity class with IDataErrorInfo implementation

<pre class="brush:csharp;">   
  partial class ProjectType : IDataErrorInfo  
  {     

    #region IDataErrorInfo Members  

    public string Error  
    {  
      get  
      {  
        StringBuilder sb = new StringBuilder();  

        if (!String.IsNullOrWhiteSpace(this["Name"]))  
          sb.AppendLine(this["Name"]);  

        if (!String.IsNullOrWhiteSpace(this["Prefix"]))  
          sb.AppendLine(this["Prefix"]);  

        string errors = sb.ToString();  
        return !String.IsNullOrEmpty(errors) ? errors : String.Empty;  
      }  
    }  

    public string this[string columnName]  
    {  
      get  
      {  
        switch (columnName)  
        {  
          case "Name":  
            return String.IsNullOrWhiteSpace(Name) ? "Name can not be empty" : String.Empty;  
          case "Prefix":  
            return String.IsNullOrWhiteSpace(Prefix) ? "Prefixcan not be empty" : String.Empty;  
          default:  
            return String.Empty;  
        }  
      }  
    }  

    #endregion  
  }
  
</pre>

The sample class above adds IDataErrorInfo implementation to my auto generated ProjectType entity class and is used to check if required fields Name and Prefix have values. That is it.

### Handling General Definition Data

Nearly every system needs some sort of general definition data during operation. For example all web sites which require registration ask for country which is a general definition data. Most of the time that sort of data does not need extra or complex processing, this data is not at the core of the operation, but may be a core part in BI. System admins just define the data and the applications display that data to the end user. Schema of that sort of data is very simple just and Id and a Name field is enough, sometimes a description field can also be included. In our project we generalized that sort of data to include Id, Name and Active fields and defined a table for each type. May be we could handle this sort of data with a single table on the database side and utilize an inheritance strategy on the EF side. But for simplicity we just decided to discard this possibility.

We decided to provide a unified editor to the admins so that they can manipulate definition data. We designed the editor to operate with interfaces so that we can handle any general data definition entity implementing a contract, in a way some sort of data contract. Lets walk through the process step by step and give some code

#### Step-1: Define the data contract, that is IDefinitionDataEntity interface  

<pre class="brush:csharp;">public interface IDefinitionDataEntity  
{  
    Int32 Id { get; set; }  
    string Name { get; set; }  
    bool Active { get; set; }  
}  
</pre>

This is simple we just define an data contract defining the structure of our general data.

#### Step-2: Mark definition data entities with IDefinitionDataEntity interface

<pre class="brush:csharp;">  [Description("Vehicle Kinds")]  
  partial class VehicleKind: IDefinitionDataEntity  
  {     
  }  
</pre>

We just define a partial class for our VehicleKind entity class, which was automatically generated by EF. Since our database schema contains Id, Name and Active columns actually EF generated VehicleKind class already contains these properties and we just simply mark our partial class with IDefinitionDataEntity.

NOTE: Description attribute is a standard .NET framework attribute which resides in System.ComponentModel namespace. We will use this attribute to render user friendly entity information in our data editor.

#### Step-3: Get all entity types implementing the IDefinitionDataEntity interface with reflection

<pre class="brush:csharp;">public class DefinitionDataEntityTypeInfo  
{  
  public Type EntityType { get; set; }  
  public string Description { get; set; }  
  public static ReadOnlyCollection&lt;DefinitionDataEntityTypeInfo&gt; TypeInfos   
  {   
     get;  
     private set;   
  }  
  static DefinitionDataEntityTypeInfo()  
  {  
    PrepareTypeInfos();  
  }  
}  
</pre>

DefinitionDataEntityTypeInfo class is just a helper class which will be used to hold the information about the definition data entity classes which is populated through reflection. TypeInfos is where we hold the data for all definition entities.

<pre class="brush:csharp;">private static void PrepareTypeInfos()  
{   
      Type tt = typeof(IDefinitionDataEntity);  

      var results = (   
                      from a in   
                      ( from type in Assembly.GetExecutingAssembly().GetTypes()  
                        where type.GetInterface(tt.FullName, true) != null  
                        select type   
                      )  
                      where a.IsClass == true  
                      select new DefinitionDataEntityTypeInfo { EntityType = a}  
                    ).ToList&lt;DefinitionDataEntityTypeInfo&gt;();  

      results.ForEach  
        (  
          delegate(DefinitionDataEntityTypeInfo t)  
          {  
            var z = (from x in t.EntityType.GetCustomAttributes(typeof(DescriptionAttribute),false)  
                     select (DescriptionAttribute)x).FirstOrDefault &lt; DescriptionAttribute&gt;();  
            if (z != null)  
              t.Description = z.Description;  
          }   
        );  

      TypeInfos = results.AsReadOnly();  
  }  

</pre>

PrepareTypeInfos static method of DefinitionDataEntityTypeInfo class is called inside the static constructor and simply inspects all entity classes implementing IDefinitionDataEntity interface  
and stores the inspection data to TypeInfos static property.

#### Step-4: Get entity set name for of a definition entity type

In order to query and modify data we must have strongly typed entity sets for our definition entity classes or inspect the name of the entity set for each entity type inside our object context. To meet this requirement we create a partial class for our ObjectContext implementation and introduce tqo methods for our purpose; GetEntitySet and GetEntitySetName. Here is the implementation

<pre class="brush:csharp;">partial class eXpressOtoEntities  
{  
  // .....  
  // Some other stuff here  
  // .....  

  public EntitySetBase GetEntitySet(Type entityType)  
  {      
      EntityContainer container = this.MetadataWorkspace.GetEntityContainer(this.DefaultContainerName, DataSpace.CSpace);  
      EntitySetBase entitySet = container.BaseEntitySets.Where(item =&gt; item.ElementType.Name.Equals(entityType.Name))  
                                                        .FirstOrDefault();  

      return entitySet;  
  }  

  public string GetEntitySetName(Type entityType)  
  {  
      EntitySetBase esb = GetEntitySet(entityType);  
      return esb != null ? esb.Name : String.Empty;  
  }  
}  
</pre>

We use the metadata, actually included in the automatically generated EDM, attached to our ObjectContext implementation (eXpressOtoEntities) to inspect the entity set name for a specific definition entity type.

NOTE: Methods introduced here can be used to get entity set or entity set name of any EF entity class as well.

Step-5: Load definition data

The final step is loading the our strongly typed definition data inside our unified editor based on the user selection. Here is the code.

<pre class="brush:csharp;">private void LoadData(Type entityType)  
{  
    ObjectQuery&lt;IDefinitionDataEntity&gt; qry = _ctx.CreateQuery&lt;IDefinitionDataEntity&gt;(String.Format("{0}", _currentSetName));  

    var z = (from x in qry  
                where x.Active  
                orderby x.Name  
                select x);  
    _currentSet = z;  
     bs.DataSource = _currentSet;  
}
</pre>

NOTES:

*   _currentSet is of type object and is used to hold the data returned by our object query which in turn we use as the DataSource of our bs (BindingSource)
*   We only load Active entities(records)
*   entityType parameter comes as a result of user selecting the definition data through a lookup control. We idenitfied the real type of definition entities in Step-3 and filled the lookup control.

Here is how the final editor looks like

![]({{ root.url }}/media/ef4-adventure/01.png)

This is a Turkish application so Tanımlar is the lookup where user selects the definition entity, the description displayed in the lookup directly comes from the Description attribute we have talked about in Step-2

### Handling Concurrency Exceptions  

EF4 supports optimistic concurrency scenarios through Concurrency Mode property residing on the entities. You just simply set Concurrency Mode = Fixed on any property you want to be included in the concurrency check process and EF handles the rest for you. Behind the scenes EF includes the old values, that is values when the entity was materialized for the first time in the ObjectContext, of the properties incorporating to the concurrency checks in the where clause of update and delete statements. When the statment is executed against the database and returned row count is zero EF infers that record was modified by another user/process which in turn causes concurrency exception to be thrown. Simple and powerfull for most scenarios. But I shall warn you about using timestamp columns for this scenario. Typically in Sql Server timestamp column is used to identify if the record was modified since the last time you fetched the record. But in parent/child constructs in case of a child entity update EF also issues a fake update on the parent entity which causes the timestamp value of the parent to be updated, which in turn causes concurrency exceptions for the parent entity even the entity was not explicitly modified by another user or process. This sort of behaviour is caused by the assumption that when a child entity of a parent entity is modified this also might have caused a conceptual modification to the parent entity. But this assumption does not apply to all, may be most, the time. In this case you have to implement your own strategy for modification marking. A simple solution can be found[here](http://www.codetuning.net/blog/post/Entity-Framework-a-concurrency-manager.aspx "Entity Framework - a concurrency manager"). We used the sample there as a starting point to implement our own.

Too much intro to optimistic concurrency, anyway. When you get a concurrency exception you have two choices

1) Inform user about the problem and reload the data automatically

2) Inform user about the problem and give user the option to decide what to do; reload data (StoreWins) or overwrite the data on the database (ClientWins)

We went with option 2 and present a dialog whre our users can select what to do next. This kind of implementation is not very straight forward, especialyy if you are dealing with complex user interface presenting lots of related information for a single entity(record). We faced some problems with the Refresh method of the ObjectContext. You need to know exactly which entity or entityset to refresh which is sometimes not possible, because you just simply bound your user interface to propertes of an entity.

Here is a sample SaveChanges implementation where we try to handle concurrency exceptions

<pre class="brush:csharp;">    /// &lt;summary&gt;  
    /// Asks user for confirmation if there are changes on the object context and persist changes  
    /// &lt;/summary&gt;  
    /// &lt;param name="confirm"&gt;Ask user for confirmation&lt;/param&gt;  
    /// &lt;returns&gt;Returns true if user does not allow changes to be persisted&lt;/returns&gt;  
    private bool SaveChanges(bool confirm)  
    {  
      if (!SessionConsts.CanPrincipalEditProjects)  
        return true;  

      ucProjectEditor1.EndEdit();  
      ucComissionMemberList1.EndEdit();  

      bool isNewProject = ucProjectEditor1.IsNew;  
      // 1)Object contex has modified, deleted or new objects   
      // 2)or we try to save a new object  
      if (_objectContext.HasChanges || isNewProject)  
      {  
        if (!confirm || MessageBoxHelper.ShowYesNo("Save changes?") == System.Windows.Forms.DialogResult.Yes)  
        {  

          // Validate project properties  
          bool projectOk = ucProjectEditor1.ValidateUserInput();  

          //Validate comission member properties  
          bool membersOk = ucComissionMemberList1.ValidateUserInput();  

          // We have problems with user input  
          if (!projectOk || !membersOk)  
          {  
            // Build the error message  
            StringBuilder errors = new StringBuilder();  
            if (!projectOk)  
            {  
              errors.AppendLine("Project definition errors.");  
              errors.AppendLine(ucProjectEditor1.GetUserInputErrors());  
            }  
            if (!membersOk)  
            {  
              errors.AppendLine(ucComissionMemberList1.GetUserInputErrors());  
            }  
            MessageBoxHelper.ShowError("Can not save project.Please correct the errors.\r\n\r\n" + errors.ToString());  
            // Cancel save operation  
            return false;  
          }  

          // We have a new project so we have to add that object to context  
          if (isNewProject)  
            _objectContext.Projects.AddObject(ucProjectEditor1.Project);  

          using (WaitDialogForm waitDlg = GeneralUtils.WaitDlg("Saving changes..."))  
          {  
            try  
            {  
              // Try to save  
              _objectContext.SaveChanges(SaveOptions.AcceptAllChangesAfterSave | SaveOptions.DetectChangesBeforeSave);  

              // Save is sucessfull so we refresh editor captions  
              ucProjectEditor1.RefreshCaption();  
              ucComissionMemberList1.RefreshCaption();  

              // If that was a new project we refresh the project list   
              // without reloading the current project in the editors  
              if (isNewProject)  
                LoadProjects(false);  
            }  
            // We got optimistic concurrency error  
            catch (OptimisticConcurrencyException oce)  
            {  
              // Ask user what shall be done  
              // Option 1) Load data from database  
              // Option 2) Keep user data and automatically save  
              waitDlg.Hide();  
              RefreshMode mode = OptimisticConcurrencyExceptionDlg.ShowForm(oce);  
              try  
              {  
                // Refresh the project and the comission members collection  
                _objectContext.Refresh(mode, ucProjectEditor1.Project);  
                _objectContext.Refresh(mode, ucProjectEditor1.Project.ComissionMembers);  

                // Project was delete in another session but we try to update in current session  
                // In this case refresh suceeeds but the object is not in the context anymore  
                // so we need to reload another project to the editor  
                if (!IsProjectStillInContext())  
                {  
                  waitDlg.Hide();  
                  MessageBoxHelper.ShowError("Proje başka bir kullanıcı tarafından silinmiş veya değiştirilmiş.");  
                  LoadProjects(true);  
                  return false;  
                }  
              }  
              // If ClientWins is selected by the user and master or details records can not be found we get an exception  
              catch (Exception)  
              {  
                waitDlg.Hide();  
                MessageBoxHelper.ShowError("Proje veya bağlı kayıtlar başka bir kullanıcı tarafından değiştirilmiş veya silinmiş.\r\nLütfen proje listesini tazeleyerek tekrar deneyiniz.");  
                return false;  
              }  

              if (mode == RefreshMode.ClientWins)  
              {  
                try  
                {  
                  waitDlg.Show();  
                  _objectContext.SaveChanges(SaveOptions.AcceptAllChangesAfterSave | SaveOptions.DetectChangesBeforeSave);  
                  ucProjectEditor1.RefreshCaption();  
                  ucComissionMemberList1.RefreshCaption();  
                }  
                // We can not apply client values to the master or detail records.  
                catch (Exception)  
                {  
                  waitDlg.Hide();  
                  MessageBoxHelper.ShowError("Can not save changes.\r\nProject record or any other related record was deleted by another session\r\nPlease refresh the Project list and try again.");  
                  LoadProjects(true);  
                  return false;  
                }  

              }  
            }  
            catch (UpdateException upex)  
            {  
              waitDlg.Hide();  
              if (!GeneralUtils.TryDisplayUniqueIndexError(upex))  
                throw upex;  
              else  
                return false;  
            }  
            return true;  
          }  
        }  
        //else  
        //{  
        //  if (!isNewProject &amp;&amp; !isExplicitSave)  
        //    _objectContext.Refresh(RefreshMode.StoreWins, ucProjectEditor1.Project);  

        //  return true;  
        //}  
      }  

      return true;  
    }

</pre>

There is lots of code in this method but I just want you to concantrate on these lines

*   Line 56: We call SaveChanges to persist changes to the database
*   Line 68: We catch the optimistic concurrency exception
*   Line 74: We present option dialog where our users can choose what to do next
*   Line 78 and Line 79: We call Refresh with user selected mode for our Project entity and ComissionMembers EntitySet (Luckily we know what to refresh :)
*   Line 100-118: If user selected ClientWins mode we re-issue SaveChanges so that user changes will be persisted to the database and overwrite the values in the database

Here is our dialog where we ask our users what to do next in case of a concurrency exception. Again the dialog is in Turkish, for clarification first option states that StoreWins, that is changes of the user will be discarder, second options states that ClientWins, that is changes made by the user will overwrite the database.

![]({{ root.url }}/media/ef4-adventure/02.png)

### UnitOfWork (ObjectContext) Decisions on WinForms

UnitOfWork is a core concept introduced in all ORM frameworks implicitly or explicitly and each ORM wrap/implement this concept through some constructs. EF4 has ObjectContext class and EF generates a named class inherited from ObjectContext for your use. If you want EF to get data or persist data from a database your entry point is your named ObjectContext class. EF materializes your entities inside your ObjectContext instance, and once you detach your entities from your object context you can not persist them to the database anymore.

Creating an instance of ObjectContext is not performance sensitive action, but when you begin populating the object context with entities you must be very carefull. If you keep you object context instance in memory for a long time and perform too much data operations your object graph may get too complicated and you will have thousands of objects in your object context, which in turn will cause you major performance issue on the client side. So be carefull when instantiating object context instances and plan carefully for how long they will be alive and do not forget to dispose them when you are finished.

In web application scenarios most ORM frameworks recommend that boundaries of UnitOfWork shall be defined by the request, that is when request arrives your unit of work starts and when request is completed/processed the unit of work ends. This is pretty effective strategy for web, but for smart client applications we do not have requests. We have to plan carefully and may be apply different strategies based on the application flow. Anyway, still we have some clues for WinForms

*   ObjectContext per form
*   ObjectContext per user control
*   ObjectContext per use case

In our application we used all of the strategies specified above. We have forms with single object context, we have user controls which manage their own object context as well as some user controls just use the object context of the parent form. We also use seperate object context per use case in some wizard style interaction scenarios. Overall be carefull while defining your unit of work, else you will have memory issues and have to handle detached objects manually.

### Audit Logging with Object Context

Most of the applications provide some sort of audit/trail logs in different detail levels. Some applications just keep track of who/when created/modified the record as the property of the actual record, some other keep more detailed information in seperate databases or tables. In our application we used both approaches, for some not so critical data we just track who/when created/modified the record, for some sensitive and more complicated data we keep track of changes in seperate tables.

With EF4 audit logging is some sort of simple, you just hook to SaveChanges event of your ObjectContext class and get information about the changed entities from ObjectStateManager of your object context instance. This is trivial, here is an example

<pre class="brush:csharp;">public class ContextInterceptor : IDisposable  
{  
    private eXpressOtoEntities context;  

    public ContextInterceptor(eXpressOtoEntities context)  
    {  
      this.context = context;  
      this.context.SavingChanges += new EventHandler(WhenSavingChanges);  
    }  

    public void Dispose()  
    {  
      if (this.context != null)  
      {  
        this.context.SavingChanges -= new EventHandler(WhenSavingChanges);  
        this.context = null;  
      }  
    }  

    void WhenSavingChanges(object sender, EventArgs e)  
    {  
      // Query ObjectStateManager and get Modified, Added and Deleted entities  
      foreach (var item in this.context.ObjectStateManager.GetObjectStateEntries(System.Data.EntityState.Modified | System.Data.EntityState.Added | EntityState.Deleted))  
      {  
        object entity = item.Entity;  
        // Perform audit logging or whatever you want  
       }  
     }  
}

</pre>

ContextInterceptor class is just a utility class, you could write the code in your ObjectContext class as well.

<pre class="brush:csharp;"> partial class eXpressOtoEntities  
 {  

    partial void OnContextCreated()  
    {       
      // Automatically attach an ContextInterceptor on each new context:  
      new ContextInterceptor(this);  
    }  
 }
 
</pre>

We simply create ContextInterceptor whenever a new ObjectContext instance is created.

So far so good, hooking is trivial inserting log records is simple too; create audit log entities and attach them to the context and save as usual. But there is an important point you should be aware of, which is optimistic concurrency. You get optimistic concurrency exception after your call to SaveChanges and your delegate WhenSavingChanges is executed, you will get the exception after attaching your log entities to the context. If you provide recovery method to the users, as I explained in the "Handling Concurrency Exceptions" section users will be able to issue another SaveChanges on the same context which will cause another set of audit log entities to be created and you will persist duplicate log entries to the database. To avaoid this problem you shall identify and remove detached log entries at the beginning of your WhenSavingChanges delegate. Here is the modified version of WhenSavingChanges method of ContextInterceptor class

<pre class="brush:csharp;"> void WhenSavingChanges(object sender, EventArgs e)  
 {  
      context.DetachAdded&lt;VehicleModelZeroPriceLog&gt;();  
      context.DetachAdded&lt;JobOrderStateLog&gt;();  

      // Query ObjectStateManager and get Modified, Added and Deleted entities  
      foreach (var item in this.context.ObjectStateManager.GetObjectStateEntries(System.Data.EntityState.Modified | System.Data.EntityState.Added | EntityState.Deleted))  
      {  
        object entity = item.Entity;  
        // Perform audit logging or whatever you want  
      }  
  }  

// Excerpt of eXpressOtoEntities demonstrating DetachAdded&lt;T&gt; method implementation  
partial class eXpressOtoEntities  
{  
  // .....  
  // Other stuff here  
  // .....  
 public void DetachAdded&lt;T&gt;()  
&nbsp;{&nbsp;&nbsp;&nbsp;&nbsp;   
   List&lt;ObjectStateEntry&gt; logEntries =   
   ObjectStateManager.GetObjectStateEntries(EntityState.Added).Where&lt;ObjectStateEntry&gt;(e =&gt; e.Entity.GetType() == typeof(T)).ToList&lt;ObjectStateEntry&gt;();  
&nbsp;  logEntries.ForEach(delegate(ObjectStateEntry e)  
&nbsp;  {  
&nbsp;&nbsp;   this.Detach(e.Entity);  
&nbsp;  });  
 }  
}

</pre>

DetachAdded<T> method simply detaches newly added entities of a specific type, in our case we use this method to detach any newly created entities of type VehicleModelZeroPriceLog and JobOrderStateLog. So with this little utility we will not get duplicate log entries in case of a recovery scenario from concurrency exceptions

### Conclusion  

Working with EF4 was a smooth experience, having an ORM background it was pretty easy to discover the shortcomings stated in this post. I even had fun working with EF4\. I also posted some bugs and improvements regarding the Visual Studio 2010 and Model Designer to Microsoft.

I'm also looking forward to test how EF4 fits in a more layered architecture and if it is possible to implement the Repository Pattern. I will try to post as I experience different aspects of EF4.

Stay tuned...

[CodeProject](http://www.codeproject.com/script/Articles/BlogFeedList.aspx?amid=631714)