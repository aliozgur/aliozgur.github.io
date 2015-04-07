---
layout: post
title: "Custom API Authentication"
subtitle: "Poor man's API authentication with API keys and some cryptography"
date:       2012-06-13 15:53
author:     "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
# header-img: "img/post-bg-05.jpg"
published: true
tags: 
  - software
---
In this blog post I will show you the details of a custom and minimal solution we have developed for Web API authentication.

<!--end-of-excerpt-->

PragmaTouch team is currently working on a new e-learning project. Below you can see a conceptual system diagram.
![Conceptual System Diagram]({{ root.url }}/media/poormanapi/01.jpg)

Users who access the Management UI inside the ASP.NET MVC 3 application are the content producers and they will access the system from standard web browsers to produce the content. Users who will consume the content (depicted at the bottom of the diagram) will access the system through our official mobile applications and other 3rd party applications. Our official applications and other client apps read/write data to the system through our Web API JSON.

We evaluated some options like OAuth, OAuth2 and simple API key authentication during the development process. All of the standard methods we have evaluated were too standard to implement or not secure enough. So we decided to go for our own simple but yet fairly secure API authentication mechanism.

### API Authentication Ticket Request

![Sample Ticket Request]({{ root.url }}/media/poormanapi/02.png)

On the server side authentication ticket requests are handled by an authentication controller which simply checks if "Request Validation Parameters" sent by the client are valid. If validation parameters are valid authentication controller generates a ticket and sends the ticket as JSON data to the client. Here is the authentication controller code

<pre class="brush:csharp;">using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using Newtonsoft.Json;
using System.Globalization;

namespace PragmaTouch.WebApp
{
    public class AuthTicketController : Controller
    {
	    private readonly IAuthRequestValidator _authRequestValidator = null;
		public AuthController(IAuthRequestValidator authRequestValidator )
		{
			_authRequestValidator = authRequestValidator;
		}

        public ActionResult Index(string p1, string p2)
        {
          if (!_authRequestValidator.IsAuthRequestValid(p1,p2))
          {
            var authData = new AuthData { Ticket = String.Empty , Success = false, Error = "Invalid validation parameters"};
            return Json(authData, JsonRequestBehavior.AllowGet);
          }
          var ticket = new AuthTicket 
          { 
            ApiKey = "apikey_comes_here",
            P1 = p1,
            P2 = p2 
          };
          ticket.SetDefaultExpiresOn();

          JsonNetResult result = new JsonNetResult();
          result.Formatting = Formatting.Indented;
          result.Data = ticket.CreateEncryptedAuthData();
          return result;
        }

        public ActionResult ServerDateTime()
        {
          JsonNetResult result = new JsonNetResult();
          result.Formatting = Formatting.Indented;
          result.Data = new { dateTime = DateTime.Now };
          return result;
        }
    }
}
</pre>
*   IAuthRequestValidator instance is injected by Ninject.MVC
*   Upon successfull validation AuthTicket is generated including the validation parameters and an empty ApiKey value. ApiKey value is a shared secret both by the server and client. Server does not put the Api Key value into the AuthTicket intentionally because the server will expect the client to populate the key to AuthTicket on subsequent API calls
*   Server sets a default expiration for the ticket.
*   AuthTicket is encrypted by the server and the result is served to the client as AuthData JSON object.

### API Request

![API Request Flow]({{ root.url }}/media/poormanapi/03.png)

The client application adds the authentication ticket (serialized as JSON) into the Authorization header of every API request. On the server side we implemented an ApiAuthorizeFilter attribute which intercepts the requests to the secured API actions and validates the authentication ticket included in the Authorization header of the request. Here is the code for the ApiAuthorizeFilter attribute

<pre class="brush:csharp;">using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace PragmaTouch.WebApp
{
  public class ApiAuthorizeAttribute:AuthorizeAttribute
  {
    protected override bool AuthorizeCore(HttpContextBase httpContext)
    {
      var authorizationHeader = httpContext.Request.Headers["Authorization"];
      if (String.IsNullOrWhiteSpace(authorizationHeader))
        return false;

      try
      {
        AuthData authData = JsonConvert.DeserializeObject(authorizationHeader);
        AuthTicket authTicket = JsonConvert.DeserializeObject(authData.Ticket.Decrypt());
        DateTime expiresOn = DateTime.Now.AddDays(1);

        if (ConfigHelper.CheckForExpiredAuthTicket)
          expiresOn = AuthTicket.ParseExpiresOn(authTicket.ExpiresOn);

        return authTicket.ApiKey == ConfigHelper.ApiKey &amp;&amp; expiresOn &gt; DateTime.Now;
      }
      catch
      {
        return false;
      }
    }

    protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
    {
      var result = new JsonNetResult();
      result.Formatting = Newtonsoft.Json.Formatting.Indented;
      result.Data = new AuthData{Success = false, Error = "Authorization required"};
      filterContext.Result = result; 
    }
  }
}
</pre>
*   ApAuthorizeAttribute simply checks if the authentication ticket has a valid Api Key value and if authentication ticket has expired (to minimaze chance of reply attacks)
*   Expiration control is optional and can be turned on/off with a value specified in the web.config file of the ASP.NET MVC 3 application
*   The same crypto algorithm and crypto keys are used on both sides (the server and client)

### Refreshing the Authentication Ticket

Clients can refresh the authentication ticket using two alternatives

1.  Simply request for a new authentication ticket
2.  Call the ServerDateTime action in the AuthTicketController to find out the current server datetime then add some extra time to the ExpiresOn value of the authentication ticket if ticket has expired.

### Sample Client Code

<pre class="brush:csharp;">public class SampleApiClient
{	
	public class ServerDateTime
    {
      public string dateTime { get; set; }
    }

    private AuthData _authTicket = null;
	private bool ApiAuthenticate(stirng p1, string p2)
	{
		_authTicket = null;
		try
		{
		string apiUrl = "http://localhost/AuthTicket";
		WebClient wc = new WebClient();

		string authDataJson = wc.DownloadString(String.Format("{0}?p1={1}&amp;p2={2}", apiUrl, p1, p2));

		_authTicket = JsonConvert.DeserializeObject(authDataJson);
		if (!_authTicket.Success)
		{
		  return false;
		}

		var authTicket = JsonConvert.DeserializeObject(_authTicket.Ticket.Decrypt());
		authTicket.ApiKey = ConfigHelper.ApiKey;
		_authTicket.Ticket = JsonConvert.SerializeObject(authTicket).Encrypt();
		return true;
		}
		catch (Exception ex)
		{
			// Do some error reporting
			throw ex;
		}
	}

	public bool GetServerDateTime(out DateTime dateTime)
    {
      dateTime = DateTime.MinValue;
      string apiUrl = "http://localhost/Api/AuthTicket/ServerDateTime";
      if (String.IsNullOrWhiteSpace(apiUrl))
        return false;

      WebClient wc = new WebClient();
      string jsonResult = wc.DownloadString(apiUrl);
      ServerDateTime result = JsonConvert.DeserializeObject(jsonResult);
      dateTime = AuthTicket.ParseExpiresOn(result.dateTime);
      return true;
    }

	public void ApiExpireAuthTicket()
    {
      if (_authTicket == null || String.IsNullOrWhiteSpace(_authTicket.Ticket))
        return;

      var authTicket = JsonConvert.DeserializeObject(_authTicket.Ticket.Decrypt());
      authTicket.ExpiresOn = String.Empty;
      _authTicket.Ticket = JsonConvert.SerializeObject(authTicket).Encrypt();
    }

    public bool RefreshAuthenticationTicket(object sender, EventArgs e)
    {
      if (_authTicket == null || String.IsNullOrWhiteSpace(_authTicket.Ticket))
        return;

      DateTime serverDateTime = DateTime.Now;
      if (!GetServerDateTime(out serverDateTime))
      {
        return false;
      }

      var authTicket = JsonConvert.DeserializeObject(_authTicket.Ticket.Decrypt());
      authTicket.ExpiresOn = AuthTicket.CreateExpiresOnString(serverDateTime.AddHours(12));
      _authTicket.Ticket = JsonConvert.SerializeObject(authTicket).Encrypt();
	  return true;
    }
	private string ApiRequest(string apiRequestUrl)
    {
      try
      {  
        MyWebClient wc = new MyWebClient(_authTicket);
        return wc.DownloadString(apiRequestUrl);

      }
      catch (Exception ex)
      {
			// Do some error reporting
			throw ex;
      }
    }

}
</pre>

Here is the custom WebClient class which is used to add the authentication ticket to the request Authorization header as JSON serialized data.

<pre class="brush:csharp;">public class MyWebClient:WebClient
{
	AuthData _ticket = null;
	public MyWebClient():base()
	{

	}

	public MyWebClient(AuthData ticket):this()
	{
	  _ticket = ticket;
	}

	protected override WebRequest GetWebRequest(Uri address)
	{
	  WebRequest request = base.GetWebRequest(address);
	  if (_ticket != null)
		request.Headers.Add("Authorization", JsonConvert.SerializeObject(_ticket));

	  return request;
	}
}
</pre>
{% include share_twitter.html %}



