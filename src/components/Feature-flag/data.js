


const dummyApiResponse={
    showLightAndDarkMode:true,
    showTikTakToeMode:true,
    showRandomColorGenerator: true,
    showAccorian: true,
    showTreeview:true,
    showCustomTabs:true
    
}

function featureFlagServiceCall(){

    return new Promise((resolve,reject)=>{
      if(dummyApiResponse) setTimeout(resolve(dummyApiResponse),500);
        else reject ("Some Error occure pleaase try again");
    })
}


export default featureFlagServiceCall;