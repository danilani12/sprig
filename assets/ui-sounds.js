import { Muse } from "https://muse.hackclub.com/exports.js";

function m({ type = 'triangle', volume = 50, bpm = 120, song = '' }) {
  return () => new Muse({ type, volume, bpm }).play`
    ${song}
  `
}

const sounds = {}

sounds.bootup = m({ song: "[b5;--d6;--b6;--g6+]-;" })
sounds.bootdown = m({ song: "[a#5;--d6;--g6;--d#6+]-" })
sounds.click = m({ song: "[b5;--d6;--]--"})
sounds.confirm = m({song: "[a#5;--d6;]-"})
sounds.hover = m({song: "[d6-;-]--", volume: 1}) // hover is kinda annoying, let's keep it quiet
sounds.no = m({song: "[g6;--d#6+]-"})
sounds.yes = m({song: "[b6;--g6+]-"}),

sounds.delete = sounds.no
sounds.create = sounds.yes

export default sounds