import {initializeBlock} from '@airtable/blocks/ui';
import React from 'react';
import {base,cursor,session} from '@airtable/blocks';

const styles = {
    harvest: {
      marginLeft: '10px',
      border: '0px',
      width: '100%',
      height: '500px'
    }
  };

function HelloWorldBlock() {
    // YOUR CODE GOES HERE
    //return <div>Hello world 🚀</div>;

    window.addEventListener("message", function(event) {
        if (event.data.type == "frame:resize") {
            document.querySelector("iframe").style.height = event.data.value + "px";
        }
    });

    var encLink = encodeURIComponent(base.tables[0].url);

    console.log(base);

    var url = "https://platform.harvestapp.com/platform/timer?app_name=Harvest&closable=false&permalink="+encLink+"&external_item_id=" + base._id + "&external_item_name=" + base.name + "&external_group_id=0&chromeless=true";

    return <iframe src={url} title="Harvest for airtable" style={styles.harvest}></iframe>;

}

initializeBlock(() => <HelloWorldBlock />);
