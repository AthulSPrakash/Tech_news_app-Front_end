import { useState, useEffect } from 'react'

export default function Fetch(url){

  const [techCrunch, setTechCrunch] = useState([])
  const [wired, setWired] = useState([])
  const [verge, setVerge] = useState([])
  const [ventureBeat, setVentureBeat] = useState([])
  const [gsmArena, setGsmArena] = useState([])
  const [engadget, setEngadget] = useState([])
  const [gizmodo, setGizmodo] = useState([])
  const [digitalTrends, setDigitalTrends] = useState([])
  const [techRadar, setTechRadar] = useState([])
  const [nineTo5Mac, setNineTo5Mac] = useState([])
  const [androidAuthority, setAndroidAuthority] = useState([])
  async function connect(param,setProp){
    await fetch(url + param)
    .then(res=> res.json())
    .then(data=>setProp(data))
    .catch(err=>console.log(err))
  }
  const data = {
    wired,
    techCrunch,
    verge,
    ventureBeat,
    gsmArena,
    engadget,
    gizmodo,
    digitalTrends,
    techRadar,
    nineTo5Mac,
    androidAuthority,
  }
  
  useEffect(() => {
      connect('techcrunch',setTechCrunch).then(()=>data.techCrunch=techCrunch)
      connect('wired',setWired).then(()=>data.wired=wired)
      connect('verge',setVerge).then(()=>data.verge=verge)
      connect('venturebeat',setVentureBeat).then(()=>data.ventureBeat=ventureBeat)
      connect('gizmodo',setGizmodo).then(()=>data.gizmodo=gizmodo)
      connect('engadget',setEngadget).then(()=>data.engadget=engadget)
      connect('nineto5mac',setNineTo5Mac).then(()=>data.nineTo5Mac=nineTo5Mac)
      connect('digitaltrends',setDigitalTrends).then(()=>data.digitalTrends=digitalTrends)
      connect('techradar',setTechRadar).then(()=>data.techRadar=techRadar)
      connect('gsmarena',setGsmArena).then(()=>data.gsmArena=gsmArena)
      connect('androidauthority',setAndroidAuthority).then(()=>data.androidAuthority=androidAuthority)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
  return data
}