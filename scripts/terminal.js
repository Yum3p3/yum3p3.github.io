console.log(`                                                                                                
                                                 .....=...-=:.                                      
                                         .-==-::.......:.    ..-=:                                  
                                     .--.. .......               ..-=-.                             
                                  ..                                  ..--                           
                                :...                                    .=:                         
                             .=.                                          .=.                       
                           :-                                               --                      
                         .+.                                                 .=.                    
                        :-                                                     --                   
                      .+.             -:                                       ..--                 
                   .:=.              -:..                                      ....:=:.             
              --==-.                :-.......                                  ..-...:+.            
              ::...                 +........        .                          .=.:=.              
          ..   -=....              .+..........     .=                           .=..:+:            
    .:.. :::    .-=:.            .::+............   +=....:..      .             .=....::           
    .::::::.     ==.          :+:...*:.::...........+: ......-=.  .:             ..-..=:            
     .:::::.      ..        :=...    +-:+...........*.    ... ..-..:              .==-.             
      .::::       .-    .. =....      .=**..........#        ... .=-              .:=               
        ..        +.   ..:   .  .-***=.   -=........*.=+*#*-.     .:               .+.              
                 .=   ...:     =#######-    :*-....=.*########-   .:               .:-              
                 =   ....=   .*#*=####+-        -=+=.--:+#######+..:               ..-              
                .-   ....=  =##: .######             ..  *########+:               ..-.             
                -.   ....-:+##=   -#####.            .. .-######*##=               ..::             
               .+   .....-=*#:+**#######             :#########*=+#+               ...=             
               --   .....:+.-.+*****==#.              =*********=--.               ...+.            
               *    .....:*....##***#=.               .=#*******. :.               ...-:            
              :=    .....-*...::::...                 .:::::---:..=.               ....=            
              -.   ......-*.:::::....  .::-           ..::::::...:-   ...         .....=            
              =.   ......-*.........                   ......:...+. ........   ........-.           
             .=    ......:+.....                           ......=.....................-.           
             .-    .......*             ..      ..              -......................::           
             :-    .......#.             -:   .+                -......................:-           
             =:   .........+.                                 :*=.......................-           
             +.   ..........=+.                            .*#--:.......................-           
             *.   .............=+-.                     .=+-::+*........................-           
             *.   .................=*+.              .**::...:*=.......................::           
             *........................=.-=*=-:..--==-::.....-+*........................-.           
             *........................++*=-----#........::*+-=+........................+.           
             +.......................==--------#....::=++----=-.......................:-            
             -:......................==---=+#*=#=+**=--------=:.......................+             
             :-.....................:==----------------------+.......................:.             
             .=....................:=.=-------------:::------+.......................-              
              =...................:-.+::::::::::::::::::::---+..:...............:+-.=.              
              .=.................=-=*-::::::::::::::::::::---+..+..............:--=-             
               :-..............==+---++--::::::::::::::::-:-==-.=*...........:++.+:             
                .+..........+#+++------=*+=--------------=+----==-+........-*---+.              
                  :=-.....=+-    :*=----------==+=++++=--==--------+=....==------*.             
                     :+-.=-:     .+..*---::--:::-+....:=...:*---:::::=+*=--------*.        
                    .=. .:-      :=. .=:::::::::=.    .+    .=:-+-:::::----------=- 
                   .=.              ..==::::::=--.     +     .-...+-::::----------=-
                   -.              ...-.=-:::-- =.            .....=:::::::::::::::-+
                  =+.              ......+:::+                .....=-::::::::::::::::+
                +=-.             .......=-:+:                .....:=:::::-::::::::::-*
               :+-+:...         .........:=:*.             ........==::----::::::::::::+
`);

const SHELL = document.querySelector(".shell");
const USER = "yum3p3";
const HOST = "website";
const PROMPT = `[${USER}@${HOST} ~]$ _`;
const TERMINAL = document.querySelector(".terminal");
let WRITING = false; 
let bufferArray = []
let rotation = 0;
let spins = 0;
let rotating = false;
let spintext = "";
let time = 0;
let minutes;
let seconds;
let booting = false;
let audio;
let on = false;

const NEOFETCH = `<pre><span class="cream">/////////////               /////////////<span class="cream">   yum3p3</span></span>@<span class="cream">website</span>
<span class="cream">  ///////////               ///////////<span class="cream"></span>   </span>  --------------
<span class="cream">    ///////////    ///    /////////// <span class="cream"></span>      </span><span class="cream">OS</span>: YumeOS
<span class="cream">     /////////// /////// /////////// <span class="cream"></span>     </span><span class="cream">  Kernel</span>: Linux
<span class="cream">      ////////// /////// ////////// <span class="cream"></span>        </span><span class="cream">Uptime</span>: <span class="timer">0m 0s</span>
<span class="cream">       ///////// /////// ///////// </span><span class="cream">         Shell</span>: Bash
<span class="cream">           /////   ///   ///// </span><span class="cream">             Terminal</span>: <span class="usr">useragent</span>
<span class="cream">                             </span><span class="cream">               Terminal Font</span>: Source Code Pro
<span class="cream">                             </span>
<span class="cream">             ///         /// </span>               <span class="colors"><span class="blackbg">nev</span><span class="red2bg">er </span><span class="green2bg">gon</span><span class="yellow2bg">na </span><span class="orange2bg">giv</span><span class="magenta2bg">e y</span><span class="cyan2bg">ou </span><span class="white2bg">up </span></span>
<span class="cream">            /////       ///// </span>              <span class="colors"><span class="graybg">nev</span><span class="redbg">er </span><span class="greenbg">gon</span><span class="yellowbg">na </span><span class="orangebg">let</span><span class="magentabg"> yo</span><span class="cyanbg">u d</span><span class="whitebg">own</span></span>              
<span class="cream">            /////       ///// </span>
<span class="cream">                  ///// </span>
<span class="cream">                  ///// </span>
<span class="cream">                   /// </span></pre>`

const FILES = `<pre>.:
bin misc profiles sites

./bin:
<a href="#" id="clear">clear</a> <a href="#" id="neofetch">neofetch</a>

./misc:
<a href="#" id="bio">biography.txt</a> 

./profiles:
<a href="#" id="github">github</a> <a href="#" id="x">x</a> 

./sites:

</pre>`

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function writeOutput(text) {
    shellText = SHELL.innerHTML;

    if(text == "") {
        SHELL.innerHTML = shellText
            +"<br />"+ PROMPT;
    } else {
        SHELL.innerHTML = shellText
            +"<br />"+ text
            +"<br />"+ PROMPT;
    }
    
    TERMINAL.scrollTop = TERMINAL.scrollHeight;
}

async function writeInput(text, delayChars, delayEnter) {
    shellText = SHELL.innerHTML;

    await sleep(delayChars);
    
    for (var i = 0; i <= text.length; i++) {
        SHELL.innerHTML = SHELL.innerHTML.slice(0, -1) + text.substring(i, i+1) + "_";
        await sleep(delayChars);
    }
    
    await sleep(delayEnter);

    SHELL.innerHTML = SHELL.innerHTML.slice(0, -1);

    await sleep(delayEnter);
}

async function command(input, dontWrite) {
    if(WRITING)
        return;
    WRITING = true;
    
    if(!dontWrite) {
        await writeInput(input, 50, 100);
    }
    

    switch (input) {
        case "clear":
            SHELL.innerHTML = PROMPT;
            break;
        case "neofetch":
            writeOutput(NEOFETCH)
            setInterval(updateTimerHTML, 1000);
            updateUA();
            break;
        case "ls -R":
            writeOutput(FILES);
            loadLinks();
            break;
        case "./profiles/github":
            writeOutput("Going to url <a href='https://github.com/Yum3p3/'>https://github.com/Yum3p3/</a>...");
            window.open("https://github.com/Yum3p3/", "_blank");
            break;
        case "./profiles/x":
            writeOutput("Going to url <a href='https://x.com/2kkiYume99482?t=lzj6YhJAMjFX7vd15tnf5w&s=09/'>https://x.com/2kkiYume99482?t=lzj6YhJAMjFX7vd15tnf5w&s=09/</a>...");
            window.open("https://x.com/2kkiYume99482?t=lzj6YhJAMjFX7vd15tnf5w&s=09/", "_blank");
            break;
        case "vim misc/biography.txt":
            writeOutput("");
            window.open("misc/biography.html");
            break;
        case "":
            writeOutput("");
            break;
        case "spin":
            await spin();
            writeOutput("Weeeeeeeeee<br />" + spintext);
            break;
        case "ocarina":
            on = true;
            await ocarina();
            writeOutput("Reproducing the song of time...<br /> Write stop if you want to stop the song :)<br />");
            break;
        case "stop":
            stopOcarina();
            break;
        default:
            writeOutput(input+": command not found");
            break;

    }
    WRITING = false;
}

async function boot() {
    if(booting) return;
    booting = true;
    let bootbtn = document.querySelector(".boot");
    bootbtn.style.color = "#fff";
    bootbtn.style.borderColor = "#fff";
    bootbtn.style.background = `linear-gradient(to right, #fff 0%, #0c0c0c 0%)`
    document.querySelector(".boot-info").classList.add("diss");
    
    bootphrasesudev = [ 
        "<span class='white2fg'>:: running early hook [udev]</span>",
        "<span class='white2fg'>starting version 1.1-yume</span>",
        "<span class='white2fg'>:: running hook [udev]</span>",
        "<span class='white2fg'>:: triggering uevents...</span>",
        "<span class='white2fg'>:: performing fsck on '/dev/sda3'</span>",
        "<span class='white2fg'>/dev/sda3 recovering journal</span>",
        "<span class='white2fg'>/dev/sda3: clean 1001/100900 files, 42069/69420</span>",
        "<span class='white2fg'>:: mounting '/dev/sda3' on real root</span>",
        "<span class='white2fg'>:: running cleanup hook [udev]</span>",
        "",
        "<span class='white2fg'>Welcome to <span class='cream'>YumeOS</span>!</span>",
        "",
    ]
    
    bootphrasessd = [
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Initializing</span> Intergalactic Drive...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Creating</span> Warp Speed Cache...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Engaging</span> Coffee Protocol v1.2...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Bootstrapping</span> Cat GIF Firewall...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Launching</span> Infinite Loop Detector...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Verifying</span> User Coolness... PASSED!",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Establishing Connection</span> to Meme Server...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Encrypting</span> Cookies with Extra Chocolate Chips...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Compiling</span> Fun.js... DONE!",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Starting</span> Party Mode on Port 404...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Mounting</span> Unicorn Storage Volumes...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Listening for</span> Pizza Delivery API Calls...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Deploying</span> Rainbow Animation Sequence...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Cooking</span> Some Pasta...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Debugging</span> Parallel Universe Links...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Updating</span> JavaScript... Skipped, It Sucks Anyway.",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Generating</span> Lorem Ipsum Poetry...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Dancing For</span> The Fun...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Rebooting</span> Planet Earth... Err... Oops, Sorry!",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Enabling</span> Internet Explorer Compatibility Mode... Just Kidding!",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Enabling</span> Duck Mode... Quack Ready!",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Searching for</span> the Meaning of Life... Not Found Yet!",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Compiling</span> ASCII Art for Good Vibes...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Activating</span> Easter Egg Subsystem...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Redirecting</span> RAM to /dev/null...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Emulating</span> Reality... SUCCESSFUL!",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Spawning</span> Friendly AI Companions...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Spawning</span> Hostile AI Enemies...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Searching Again for</span> the Meaning of Life... 42!",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Linking to</span> the Matrix... Neo Approved.",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Starting</span> Getty on tty1",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Reached target</span> Login Prompts",
    ]    
    
    SHELL.innerHTML = "_";
    
    let totboot =  bootphrasesudev.length + bootphrasessd.length;
    let bootcounter = 1;
    let perc = 0;
    
    console.log(totboot)
    for (let i = 0; i < bootphrasesudev.length; i++) {
        await sleep(50);
        SHELL.innerHTML = SHELL.innerHTML.slice(0, -1) + bootphrasesudev[i] + "<br />_";
        TERMINAL.scrollTop = TERMINAL.scrollHeight;

        bootcounter++;
        perc = Math.round(bootcounter/totboot*100);
        bootbtn.style.background = `linear-gradient(to right, #fff ${perc}%, #0c0c0c ${perc}%)`
    }
    
    await sleep(200);
    
    

    for (let i = 0; i < bootphrasessd.length; i++) {
        await sleep(20);
        SHELL.innerHTML =  SHELL.innerHTML.slice(0, -1) + bootphrasessd[i] + "<br />_";
        TERMINAL.scrollTop = TERMINAL.scrollHeight;

        bootcounter++;
        perc = Math.round(bootcounter/totboot*100);
        bootbtn.style.background = `linear-gradient(to right, #fff ${perc}%, #0c0c0c ${perc}%)`
    }

    await sleep(300);

    setInterval(updateTimer, 1000);

    bootbtn.classList.add("diss");

    SHELL.innerHTML = "YumeOS 1.1-yume (tty)<br />website login: _";

    await sleep(100);
    await writeInput(USER, 50, 100);
    SHELL.innerHTML =  SHELL.innerHTML+ "<br />" + "Password: _";
    await sleep(450);
    SHELL.innerHTML =  SHELL.innerHTML.slice(0, -1) + "<br />";
    SHELL.innerHTML += PROMPT
    
    await command("neofetch");
    await command("ls -R")
    
    

    window.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            SHELL.innerHTML = SHELL.innerHTML.slice(0, -1); 
            command(bufferArray.join(''), true);
            bufferArray = []; 
            
        } else if (e.key === "Backspace") {
            e.preventDefault(); 
            if (bufferArray.length > 0) {
                bufferArray.pop(); 
                SHELL.innerHTML = SHELL.innerHTML.slice(0, -2) + "_"; 
            }
        } else if (e.key.length === 1) { 
            bufferArray.push(e.key); 
            SHELL.innerHTML = SHELL.innerHTML.slice(0, -1) + e.key + "_"; 
        }
    });

}

async function spin() {
    if(rotation==0 && !rotating) {
        for(let i = 0; i<=180; i++) {
            rotating = true;
            await sleep(0);
            document.body.style.setProperty("-webkit-transform", `rotate(-${i}deg)`, null);
            rotation++;
        }
    } else if(!rotating) {
        for(let i = 180; i<=360; i++) {
            rotating = true;
            await sleep(0);
            document.body.style.setProperty("-webkit-transform", `rotate(-${i}deg)`, null);
            rotation=0;
        }
        spins++;
        switch(spins) {
            case 1:
                spintext = `you did ${spins} spin`;
                break;
            case 9:
                spintext = `you did ${spins}? spins`;
                break;
            default:
                spintext = `you did ${spins} spins`;
                break;
        }
    }
    rotating = false;
    console.log("I feel dizzy")
}

async function ocarina() {
    // Create an audio element
    audio = document.createElement('audio');
    audio.id = 'ocarinaAudio';
    audio.src = 'music/TZ1.mp3';
    audio.preload = 'auto';
    audio.volume = 0.05; 

    // Append the audio element to the body
    document.body.appendChild(audio);

    // Set on to true when the audio starts playing
    on = true;

    // Set on to false when the audio ends
    audio.onended = () => {
        on = false;
    };

    // Play the audio
    await audio.play();  
}

function stopOcarina() {
    if (on) {
        writeOutput("Stopping the song of time...<br />");
        audio.pause();
        audio.currentTime = 0; // Reset the audio to the beginning
        on = false;
    } else {
        writeOutput("No audio to stop...<br />");
    }
}

function loadLinks() {
    const BG = document.getElementById("bio");
    const CL = document.getElementById("clear");
    const NF = document.getElementById("neofetch");

    const GH = document.getElementById("github");
    const X = document.getElementById("x");

    CL.onclick = async () => {
        await command("clear");
        await command("neofetch");
        await command("ls -R")
        loadLinks();
    };

    NF.onclick = async () => {
        await command("neofetch");
        loadLinks();
    };

    X.onclick = async () => {
        await command(`./profiles/x`);
        loadLinks();
    };
    

    GH.onclick = async () => {
        await command("./profiles/github");
        loadLinks();
    };


    BG.onclick = async () => {
        await command(`vim misc/biography.txt`);
        loadLinks();
    };

}

function updateTimer() {

    minutes = Math.floor(time / 60);
    seconds = time % 60;
    time++;
}

function updateTimerHTML() {
    let timerEl = document.querySelectorAll(".timer").forEach(e => {
        e.innerHTML = `${minutes}m ${seconds}s`;
    });
    
}
function updateUA() {
    const usrEl = document.querySelectorAll(".usr").forEach(e => {
        var result = bowser.getParser(navigator.userAgent).getResult();
        e.innerHTML = `${result.browser.name} (${result.os.name})`;
    });
}