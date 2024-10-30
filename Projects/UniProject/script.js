function togglePopup(title) {
    // Show the popup
    document.getElementById('organisation').value = title;
    document.getElementById("popup").classList.toggle("active");

    // Set the popup title
    document.getElementById("popupTitle").innerHTML = title;
}

function submitForm() {
    // Here, you can access the value of 'organisation' and do whatever you need with it
    var organisation = document.getElementById('organisation').value;

    // Log the value to the console (for testing purposes)
    console.log("Organisation: " + organisation);

    // If everything is okay, return true to allow the form to be submitted
    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var fname = urlParams.get('fname');
    var sname = urlParams.get('sname');
    var Regularity = urlParams.get('Regularity');
    var Hours = urlParams.get('Hours');
    var choice = urlParams.get('organisation');
    console.log('organisation: ' + choice);

    var message = `Thank you ${fname} ${sname} for volunteering your time ${Regularity} for ${Hours} hours!`;
    document.getElementById('message').innerHTML = message;

    var images = [
        {
            alt: "The Little Kings Movement",
            src: "LKM.png",
            href: "http://thelittlekingsmovement.org.au/index.php/volunteer-2/"
        },
        {
            alt: "YWCA Australia", 
            src: "YWCA.png", 
            href: "https://www.ywca.org.au/volunteer/"
        },
        {
            alt: "DV Connect", 
            src: "DVC.png", 
            href: "https://www.dvconnect.org/womensline/help-for-others/"
        },
        {
            alt: "Womens Community Shelters", 
            src: "WCS.png", 
            href: "https://www.womenscommunityshelters.org.au/"
        },
        {
            alt: "Australian Red Cross", 
            src: "ARC.png", 
            href: "https://www.redcross.org.au/volunteer/"
        },
        {
            alt: "The Smith Family", 
            src: "TSF.png", 
            href: "https://www.thesmithfamily.com.au/get-involved/volunteer"
        },
        {
            alt: "Go Volunteer", 
            src: "GoVolunteer.png", 
            href: "https://govolunteer.com.au/"
        },
        {
            alt: "Meals on Wheels Australia", 
            src: "MoW.png", 
            href: "https://mealsonwheels.org.au/get-involved/volunteer/"
        }
    ];

    console.log('entering for loop');
    for (var org of images) {
        console.log('org.alt: ' + org.alt);
        if (org.alt == choice) {
            console.log('inside if statement');
            var img = document.getElementById('image');
            img.src = org.src;
            var imlink = document.getElementById('imagelink');
            imlink.href = org.href;
            break;
        }
    }
    console.log('outside for loop');
});
