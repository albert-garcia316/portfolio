
    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function currentDivD(n) {
        showDivs(slideIndex = n);
    }

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("socketSlides");
        var y = document.getElementsByClassName("socketText");
        var dots = document.getElementsByClassName("sdot");
        if (n > x.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            y[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" white", "");
        }
        x[slideIndex-1].style.display = "block";
        y[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " white";
    }

    var slideIndexDraft = 1;
    showDivsDraft(slideIndexDraft);

    function plusDivsDraft(n) {
        showDivsDraft(slideIndexDraft += n);
    }
    function currentDivDraft(n) {
        showDivsDraft(slideIndexDraft = n);
    }

    function showDivsDraft(n) {
        var i;
        var x = document.getElementsByClassName("draftSlides");
        var y = document.getElementsByClassName("draftText");
        var dots = document.getElementsByClassName("ddot");
        if (n > x.length) {slideIndexDraft = 1}    
        if (n < 1) {slideIndexDraft = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            y[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" white", "");
        }
        x[slideIndexDraft-1].style.display = "block";
        y[slideIndexDraft-1].style.display = "block";
        dots[slideIndexDraft-1].className += " white";
    }




