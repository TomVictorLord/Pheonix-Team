

alert("Hello " + name)
alert ("You arrive at the zoo!")
alert ("You look forward to an exciting day of adventure.")

const animals = prompt("Which animals should you look at? lions, elephants, insects or monkeys. Or type continue to move on. Choose 1")
if (animals === "") {
    alert ("Choose an animal")
    const animals = prompt("Which animals should you look at? lions, elephants, insects, or monkeys. Or type continue to move on. Choose 1")

    else if(animals == "lions") {
     alert ("You chose the lions." + "You approach the lions, they are asleep." + "You wait for a few minutes and one wakes up, strecthes and gives a mighty roar." + "Yo" )
     const animals = prompt("Which animals should you look at? lions, elephants, insects, or monkeys. Choose 1")
    }
    else if(animals == "elephants") {
     alert ("You chose the elephants.")
     const animals = prompt("Which animals should you look at? lions, elephants, insects, or monkeys. Or type continue to move on. Choose 1")
    }
    else if(animals == "insects") {
     alert ("You chose the insects " + "You enter the bug house. " + "It's very dark and a little creepy" + "You approach a glass tank and see eight hairy legs attached to a big hairy body. " + "The spider jumps at the glass and you make a run for it"  )
     const animals = prompt("Which animals should you look at? lions, elephants, insects, or monkeys. Or type continue to move on. Choose 1")
    }
    else if(animals == "monkeys") {
     alert ("You chose the monkeys")
     const animals = prompt("Which animals should you look at? lions, elephants, insects, or monkeys. Or type continue to move on. Choose 1")
    }
    else if(animals == "continue") {
        alert ("You decide to try out some activities in the zoo")
    }

    const activities = prompt("Which activities will you take part in? nature walk, zipwire, photography. Choose 1")
    if (activities == "") {
    alert ("Choose an activity")
    const activities = prompt("Which activities will you take part in? nature walk, zipwire, photography. Choose 1")
    }
}


