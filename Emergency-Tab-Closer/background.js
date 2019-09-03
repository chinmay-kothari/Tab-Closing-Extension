
chrome.browserAction.onClicked.addListener(function(tab)
{// Any site can be added to the array of urls as per the User's convenience exactly in the format *://<LINK>/* in the url array
	chrome.tabs.query(//For closing 'bad' sites
	  {url:["*://www.facebook.com/*", "*://www.youtube.com/*", "*://www.pornhub.com/*", "*://twitter.com/*", "*://www.instagram.com/*", "*://www.xnxx.com/*", "*://www.google.co.in/*"]},
	  function(tabArray){
		  var i=0;
		  var tab;
		  var id;
		  while (i<tabArray.length)
		  {
		  tab = tabArray[i];
		  id = tab.id;
		  chrome.tabs.remove(id, function (){});
		  i+=1;
		  }
		  chrome.tabs.create({url:"https://www.meritnation.com/"});// Opens a 'good' site
	  }
	);

});
// A Chinmay Kothari Production
