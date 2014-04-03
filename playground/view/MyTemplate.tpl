{Template {
    $classpath : "playground.view.MyTemplate",
    $hasScript : true,
    $css : ["playground.style.MyTemplateStyle"]
}}

        {macro main()}
        <div style="height:100%; width:100%; position:absolute; background-color:#f8f8f8;">
            <div style="position:absolute; left:50%; height:295px; width:480px; margin-left:-240px; margin-top:80px; border-radius:15px; border:2px solid #fff;">
                <div style="margin-top:5px;">
                    <a href="http://ariatemplates.com" target="_blank" style="padding-left:100px"><img src="http://ariatemplates.com/images/logo-page.png" alt="Aria Templates" width="242" height="72"></a>
                    <div style="padding-top:40px;">
                        <h1 style="color:#666; font-size:20px; font-weight:bold; font-family:Tahoma; border:0px; padding-left:180px; padding-bottom:10px; margin:0px;">Aria Template Playground</h1>
                        <p style="color:#666; font-size:14px; font-family:Tahoma; margin:0; padding-left:180px;">This is aria templates playground application following are the links to access examples</p>
                        <div class="links">
                            <ul>
                                <li>Example 1 (attester implementation)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/macro}
    
{/Template}
