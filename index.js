function talkLuci() {
    const speak = ["Ahh!!! Morre Diabo!!",
        "Eu não sou um gato. ",
        "Miauu!!",
        "Depois da uma passadinha lá no meu bar bebê, tem umas fadas que vão adorar você...",
        "Rapaz!! Tu leva jeito pra demônio pena que o inferno táa lotado já."
    ]

    const numero = Math.floor(Math.random() * speak.length);

    alert(speak[numero])

}


function talkTibine() {
    const speak = ["Cara!!! Eu to muito bêbada!!",
        "Viu meu amigo ?  Ele é pequeno, esquisito e verde.",
        "Uma vez uma feira me disse que lógica e religião não combinam.",
        "Nossa cara, sem querer ofender mas você é muito feio e olha que meu melhor amigo é um demônio."
    ]

    const numero = Math.floor(Math.random() * speak.length);

    alert(speak[numero])

}



function talkElfo() {
    const speak = ["Viu a Tibine por ai?"]

    const numero = Math.floor(Math.random() * speak.length);

    alert(speak[numero])

}