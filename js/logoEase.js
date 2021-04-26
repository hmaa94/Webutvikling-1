const timeline = new TimelineMax();

timeline.set("#bLogo", {autoAlpha: 0 });
timeline.to("#bLogo", 1, {
            autoAlpha: 1,
            delay: 1,
            ease:Sine.easeIn},);