function FindProxyForURL(url, host) {

	var useSocksFET = ["*.cosng.net", "*.cloudqa.local", "*mgmt.ergogroup.no", "*idar*.evry.com", "*nicap*.evry.com", "*.cosng.net:*", "evry.ipcenter.com"];
	var useSocksESN = ["*.dcinf.se"];
	var useSocksGJO = ["*10.133.*"];

	for (var i= 0; i < useSocksFET.length; i++) {
        	if (shExpMatch(host, useSocksFET[i])) {
            	  return "SOCKS localhost:1080";
        	}
	}

	for (var i=0; i < useSocksESN.length; i++) {
		if (shExpMatch(host, useSocksESN[i])) {
		  return "SOCKS localhost:1081";
		}
	}

	for (var i=0; i < useSocksGJO.length; i++) {
		if (shExpMatch(host, useSocksGJO[i])) {
		  return "SOCKS localhost:1082";
		}
	}

        // All other requests go directly
        return "DIRECT"; 
}
