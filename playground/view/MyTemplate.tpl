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
                    <iframe allowtransparency="true" frameborder="0" scrolling="no" src="//platform.twitter.com/widgets/follow_button.html?screen_name=ariatemplates&show_screen_name=false&show_count=false" style="width:60px; height:20px; margin-bottom:12px; margin-left:5px;"></iframe>
                    <div style="padding-top:40px;">
                        <h1 style="color:#666; font-size:20px; font-weight:bold; font-family:Tahoma; border:0px; padding-left:180px; padding-bottom:10px; margin:0px;">Hello World!</h1>
                        <p style="color:#666; font-size:14px; font-family:Tahoma; margin:0; padding-left:180px;">This is your template</p>
                        <span style="color:#666; font-size:14px; font-family:Tahoma; margin:0; padding-left:10px;">Everything is set up! You can now start working on your awesome project.</span>
                    </div>
                </div>
                <div style="padding-top:40px; text-align:center;">
                    <iframe src="http://ghbtns.com/github-btn.html?user=ariatemplates&repo=ariatemplates&type=fork&count=true&size=large" allowtransparency="true" frameborder="0" scrolling="0" width="135" height="30" style="padding-left:12px"></iframe>
                    <iframe src="http://ghbtns.com/github-btn.html?user=ariatemplates&repo=ariatemplates&type=watch&count=true&size=large" allowtransparency="true" frameborder="0" scrolling="0" width="131" height="30"></iframe>
                </div>
            </div>
        </div>
        {/macro}
    
{/Template}
