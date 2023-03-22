$(document).ready(function () {
    var myDate = new Date();
    var hrs = myDate.getHours();
    const elts = {
        text1: document.getElementById("text1"),
        text2: document.getElementById("text2")
    };
    const textsMorning =
        [
            "good morning",
            "buenas dias"
        ]

    const textsAfternoon =
        [
            "good afternoon",
            "buenas tardes"
        ]

    const textsEvening =
        [
            "good evening",
            "buenas noches"
        ]


    const morphTime = .75;
    const cooldownTime = 3;
    
    if (hrs < 12){
        let textIndex = textsMorning.length - 1;
        let time = new Date();
        let morph = 0;
        let cooldown = cooldownTime;

        
        elts.text1.textContent = textsMorning[textIndex % textsMorning.length];
        elts.text2.textContent = textsMorning[(textIndex + 1) % textsMorning.length];

        function doMorph() {
            morph -= cooldown;
            cooldown = 0;

            let fraction = morph / morphTime;

            if (fraction > 1) {
                cooldown = cooldownTime;
                fraction = 1;
            }

            setMorph(fraction);
        }

        function setMorph(fraction) {
            elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

            fraction = 1 - fraction;
            elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

            elts.text1.textContent = textsMorning[textIndex % textsMorning.length];
            elts.text2.textContent = textsMorning[(textIndex + 1) % textsMorning.length];
        }
        function doCooldown() {
            morph = 0;
    
            elts.text2.style.filter = "";
            elts.text2.style.opacity = "100%";
    
            elts.text1.style.filter = "";
            elts.text1.style.opacity = "0%";
        }
    
        function animate() {
            requestAnimationFrame(animate);
    
            let newTime = new Date();
            let shouldIncrementIndex = cooldown > 0;
            let dt = (newTime - time) / 1000;
            time = newTime;
    
            cooldown -= dt;
    
            if (cooldown <= 0) {
                if (shouldIncrementIndex) {
                    textIndex++;
                }
    
                doMorph();
            } else {
                doCooldown();
            }
        }
    
        animate();
    }

    else if (hrs >= 12 && hrs <= 17){
        let textIndex = textsAfternoon.length - 1;
        let time = new Date();
        let morph = 0;
        let cooldown = cooldownTime;

        
        elts.text1.textContent = textsAfternoon[textIndex % textsAfternoon.length];
        elts.text2.textContent = textsAfternoon[(textIndex + 1) % textsAfternoon.length];

        function doMorph() {
            morph -= cooldown;
            cooldown = 0;

            let fraction = morph / morphTime;

            if (fraction > 1) {
                cooldown = cooldownTime;
                fraction = 1;
            }

            setMorph(fraction);
        }

        function setMorph(fraction) {
            elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

            fraction = 1 - fraction;
            elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

            elts.text1.textContent = textsAfternoon[textIndex % textsAfternoon.length];
            elts.text2.textContent = textsAfternoon[(textIndex + 1) % textsAfternoon.length];
        }
        function doCooldown() {
            morph = 0;
    
            elts.text2.style.filter = "";
            elts.text2.style.opacity = "100%";
    
            elts.text1.style.filter = "";
            elts.text1.style.opacity = "0%";
        }
    
        function animate() {
            requestAnimationFrame(animate);
    
            let newTime = new Date();
            let shouldIncrementIndex = cooldown > 0;
            let dt = (newTime - time) / 1000;
            time = newTime;
    
            cooldown -= dt;
    
            if (cooldown <= 0) {
                if (shouldIncrementIndex) {
                    textIndex++;
                }
    
                doMorph();
            } else {
                doCooldown();
            }
        }
    
        animate();
    
    }

    else if (hrs >= 17 && hrs <= 24){
        let textIndex = textsAfternoon.length - 1;
        let time = new Date();
        let morph = 0;
        let cooldown = cooldownTime;

        
        elts.text1.textContent = textsEvening[textIndex % textsEvening.length];
        elts.text2.textContent = textsEvening[(textIndex + 1) % textsEvening.length];

        function doMorph() {
            morph -= cooldown;
            cooldown = 0;

            let fraction = morph / morphTime;

            if (fraction > 1) {
                cooldown = cooldownTime;
                fraction = 1;
            }

            setMorph(fraction);
        }

        function setMorph(fraction) {
            elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

            fraction = 1 - fraction;
            elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

            elts.text1.textContent = textsEvening[textIndex % textsEvening.length];
            elts.text2.textContent = textsEvening[(textIndex + 1) % textsEvening.length];
        }
    

    function doCooldown() {
        morph = 0;

        elts.text2.style.filter = "";
        elts.text2.style.opacity = "100%";

        elts.text1.style.filter = "";
        elts.text1.style.opacity = "0%";
    }

    function animate() {
        requestAnimationFrame(animate);

        let newTime = new Date();
        let shouldIncrementIndex = cooldown > 0;
        let dt = (newTime - time) / 1000;
        time = newTime;

        cooldown -= dt;

        if (cooldown <= 0) {
            if (shouldIncrementIndex) {
                textIndex++;
            }

            doMorph();
        } else {
            doCooldown();
        }
    }

    animate();
}
})
