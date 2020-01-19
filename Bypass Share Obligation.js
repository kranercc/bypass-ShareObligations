function deletePopUpOverlay()
{

    document.getElementById("onload_popup").remove();
    document.getElementsByClassName("b-modal __b-popup1__")[0].remove()
}
function ImToYoungToGoToJail() {
    
    let delta = null
    let currentScroll = null
    window.addEventListener("wheel", event => {
        delta = Math.sign(event.deltaY);
        console.info(delta);
        console.info(currentScroll);
        
        currentScroll = document.documentElement.scrollTop
        if (delta != null)
        {
            if (delta === 1) 
            {
                //down scroll
                window.scrollTo(0, currentScroll + 10);
        
        
            }
            if (delta === -1)
            {
                // up scroll   
                window.scrollTo(0, currentScroll - 10);
                
        
            }
        }
    
    });
    
}
ImToYoungToGoToJail();
deletePopUpOverlay();