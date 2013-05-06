(function() {

return {

    requests: {
        getAudits: function(id) {
            return {
                url: '/api/v2/tickets/' + id +'/audits.json',
                dataType: 'JSON',
                type: 'GET'
            };
        }

// AIzaSyDvpR-FSmQlIOROvebVFH3yQ8QaTe8cQJM

    },


    events: {
      'app.activated':'checkAudits',
      'getAudits.done':'displayAudits',
//      'displayAudits.done':'openMap'
     },
 
    checkAudits: function() {
        this.ajax("getAudits", this.ticket().id());
    },
    
    displayAudits: function(data) {
        var metadata = data["audits"][0]["metadata"]["system"];
        var location = metadata["location"];
        var ip_address = metadata["ip_address"];

        if (location !== undefined) {
            console.log("location:");
            console.log(location);
        }
        else if (location == undefined && ip_address !== undefined) { 
            console.log("ip_address:");
            console.log(ip_address);
        }
        else {
            console.log("MOTHERFUCKA");
        }
        this.switchTo('maps1',
            {
                sayLocation: location
            });
    },

  };

}());