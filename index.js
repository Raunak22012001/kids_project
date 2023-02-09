const numberOfButtons = document.querySelectorAll(".alphabet").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".alphabet")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML.toUpperCase();
        buttonAnimation(buttonInnerHTML);
        makeSound(buttonInnerHTML);
    });
}

addEventListener("keydown", (event) => {
    buttonAnimation(event.key);
    makeSound(event.key);
});


function makeSound(key) {
    switch (key) {
        case "A":
            var a = new Audio("sounds/A for Apple.mp3")
            a.play()
            break;

        case "B":
            var b = new Audio("sounds/B for Ball.mp3")
            b.play()
            break;

        case "C":
            var c = new Audio("sounds/C for CAT.mp3")
            c.play()
            break;

        case "D":
            var d = new Audio("sounds/D for DOG.mp3")
            d.play()
            break;

        case "E":
            var e = new Audio("sounds/E for Elephant.mp3")
            e.play()
            break;

        case "F":
            var f = new Audio("sounds/f for fish.mp3")
            f.play()
            break;

        case "G":
            var g = new Audio("sounds/g for goat.mp3")
            g.play()
            break;

        case "H":
            var h = new Audio("sounds/H FOR HAT.mp3")
            h.play()
            break;

        case "I":
            var i = new Audio("sounds/i for ice cream.mp3")
            i.play()
            break;

        case "J":
            var j = new Audio("sounds/j for joker.mp3")
            j.play()
            break;

        case "K":
            var k = new Audio("sounds/k for kite.mp3")
            k.play()
            break;


        case "L":
            var l = new Audio("sounds/l for lion.mp3")
            l.play()
            break;

        case "M":
            var m = new Audio("sounds/m for monkey.mp3")
            m.play()
            break;


        case "N":
            var n = new Audio("sounds/n for nose.mp3")
            n.play()
            break;

        case "O":
            var o = new Audio("sounds/o for orange.mp3")
            o.play()
            break;


        case "P":
            var p = new Audio("sounds/p for parrot.mp3")
            p.play()
            break;

        case "Q":
            var q = new Audio("sounds/q for queen.mp3")
            q.play()
            break;

        case "R":
            var r = new Audio("sounds/r for rose.mp3")
            r.play()
            break;

        case "S":
            var s = new Audio("sounds/s for sun.mp3")
            s.play()
            break;

        case "T":
            var t = new Audio("sounds/t for tiger.mp3")
            t.play()
            break;

        case "U":
            var u = new Audio("sounds/u for umbrella.mp3")
            u.play()
            break;

        case "V":
            var v = new Audio("sounds/v for van.mp3")
            v.play()
            break;

        case "W":
            var w = new Audio("sounds/w for watch.mp3")
            w.play()
            break;

        case "X":
            var x = new Audio("sounds/x for xmas tree.mp3")
            x.play()
            break;

        case "Y":
            var y = new Audio("sounds/y for yellow.mp3")
            y.play()
            break;

        case "Z":
            var z = new Audio("sounds/z for zebra.mp3")
            z.play()
            break;

        default:
            console.log(buttonInnerHTML);
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+ currentKey.toUpperCase());
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}