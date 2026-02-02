import React, { useState } from "https://esm.sh/react@18.2.0"
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client"

const NO_PHRASES = [
  "No 💔",
  "Pretty please? 🥺",
  "But we'd be so cute together! 💕",
  "One more chance, pookie?",
  "Don't break my heart :(",
  "What about a maybe?",
  "Please don't do this to me, I'm fragile",
  "Cmon you know you like it",
  "No again? That hurts a little 😭",
  "Wow. You really clicked it twice.",
  "My mom already likes you 💖",
  "Are you sure your finger slipped?",
  "I made plans in my head already 🥺",
  "This is getting personal now.",
  "I thought we had something.",
  "You are playing hard to get. I respect it.",
  "Just say yes and we both win 💕",
  "I will literally be the cutest partner.",
  "At this point you are teasing me.",
  "One yes would solve everything.",
  "My heart is buffering 💔",
  "Okay but imagine us though.",
  "You are being unreasonable now 😌",
  "Love requires bravery.",
  "This no is starting to feel illegal.",
  "I am running out of patience but not love.",
  "Do you enjoy hurting me.",
  "Say yes and I will stop asking. Probably.",
  "This is emotional damage.",
  "I hope you know I am persistent.",
  "You are strong. I am stronger.",
  "Resistance is adorable.",
  "Just click yes. For peace.",
  "I am still asking nicely.",
  "You are testing my devotion.",
  "I can do this all day.",
  "Your no only fuels my affection.",
  "We are meant to be. Trust the process.",
  "At this point fate is involved.",
  "Think of the rom com ending.",
  "Why fight destiny.",
  "You are one click away from happiness.",
  "I am not mad. Just disappointed.",
  "This is a hostage situation but romantic.",
  "I will wait. But dramatically.",
  "My love has no cooldown.",
  "You cannot escape the vibes.",
  "This is getting intense but tender.",
  "I admire your commitment to no.",
  "Say yes and I will bake cookies.",
  "I am emotionally invested now.",
  "Do not make me beg again.",
  "I will remember this moment forever.",
  "You are really making me work for it.",
  "I respect consent but wow.",
  "Just do it. Lovingly.",
  "Okay last no. I mean it. Maybe."
]

const BEAR_IMAGES = [
  "https://media.tenor.com/VIChDQ6ejRQAAAAj/jumping-bear-hearts-no-png.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyODd6ZHQxd21ieTF1cDFnZm1vZ3B5Z2Z5Mm5kNzVndGt6MWpia3VreiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DtBHcARLqNAvVnYsyD/200w.gif",
  "https://media.tenor.com/kZBpoYdWf0sAAAAi/wtf.gif",
  "https://media.tenor.com/qwPUnp4b-xAAAAAM/shocked-surprised.gif",
  "https://media1.tenor.com/m/LI-8U6umvaQAAAAC/bear-bipolar.gif"
]

const FINAL_IMAGE =
  "https://media.tenor.com/f1xnRxTRxLAAAAAj/bears-with-kisses-bg.gif"

const e = React.createElement

function App() {
  const [noClicks, setNoClicks] = useState(0)
  const [isValentine, setIsValentine] = useState(false)

  const bearIndex = Math.min(Math.floor(noClicks / 5), BEAR_IMAGES.length - 1)
  const bearImg = BEAR_IMAGES[bearIndex]

  const evilLevel = Math.min(noClicks, 25)

  const bearStyle = {
    width: "220px",
    maxWidth: "70vw",
    filter:
      "hue-rotate(" +
      evilLevel * 10 +
      "deg) saturate(" +
      (1 + evilLevel * 0.2) +
      ") contrast(" +
      (1 + evilLevel * 0.15) +
      ") brightness(" +
      (1 - evilLevel * 0.03) +
      ")",
    boxShadow:
      "0 0 " +
      evilLevel * 2 +
      "px rgba(255,0,0," +
      Math.min(0.15 + evilLevel * 0.03, 0.8) +
      ")",
    borderRadius: "16px",
    transform: "scale(" + (1 + evilLevel * 0.02) + ")",
    animation:
      noClicks >= 3
        ? "evilPulse 0.9s infinite, evilShake 0.12s infinite"
        : noClicks >= 1
        ? "evilPulse 1.3s infinite"
        : "none"
  }

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    textAlign: "center"
  }

  const yesStyle = {
    fontSize: noClicks * 20 + 16 + "px",
    padding: "10px 20px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }

  const noStyle = {
    fontSize: "16px",
    padding: "10px 20px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }

  if (!isValentine) {
    const noText =
      noClicks === 0
        ? "No"
        : NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)]

    return e(
      "div",
      { style: containerStyle },
      e("img", { src: bearImg, alt: "bear", style: bearStyle }),
      e("h1", null, "Will you be my Valentine? 💘"),
      e(
        "div",
        null,
        e(
          "button",
          { style: yesStyle, onClick: () => setIsValentine(true) },
          "Yes"
        ),
        e(
          "button",
          { style: noStyle, onClick: () => setNoClicks(noClicks + 1) },
          noText
        )
      )
    )
  }

  return e(
    "div",
    { style: containerStyle },
    e("img", { src: FINAL_IMAGE, alt: "love" }),
    e(
      "div",
      { style: { fontSize: "48px", color: "pink", fontWeight: "bold" } },
      "Yay!!! 💖🎉"
    )
  )
}

createRoot(document.getElementById("root")).render(e(App))
