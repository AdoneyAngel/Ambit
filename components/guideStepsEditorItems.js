import { useState, useEffect } from "react"

export default function GuideStepsEditorItems({guideData, steps, indexChangeGuideStructure}){
    const [guideSteps, setGuideSteps] = useState([])
    const [guideStructure, setGuideStructure] = useState({})

    let nSteps = -1

    const handleChangeStructure = (element) => {
        let newGuideStructure = guideStructure

        const elementObject = element.target

        const elementComponent = element.target.id.split("-")[0]
        const elementStep = Number(element.target.id.split("-")[1])
        const elementN = Number(element.target.id.split("-")[2])

        if(elementComponent === "guideName"){
            newGuideStructure.name = elementObject.value

        }else if(elementComponent === "stepTitle"){
            newGuideStructure.steps[elementStep].title = elementObject.value

        }else if(elementComponent === "inputText"){
            newGuideStructure.steps[elementStep].content[elementN].value = elementObject.value

        }

        setGuideStructure(newGuideStructure)
        indexChangeGuideStructure(newGuideStructure)
    }


    useEffect(() => {
        
        setGuideSteps(steps)
        setGuideStructure(guideData)
    
    }, [steps])

    return <>

    <input id={`guideName`} onChange={(e) => handleChangeStructure(e)} type="text" placeholder={guideData.name} />

    {
        guideSteps.map(step => {
            nSteps = nSteps + 1
            let nItemsPos = -1


            return(

                <section key={step.content} className="guideEditorParagraph">
                    <input id={`stepTitle-${nSteps}`} onChange={(e) => handleChangeStructure(e)} type="text" placeholder={step.title} />


                    {
                        step.content.map(item => {
                            nItemsPos = nItemsPos + 1

                            return(

                                item.type === "text" ? <input onChange={(e) => handleChangeStructure(e)} id={`inputText-${nSteps}-${nItemsPos}`} key={item.value} placeholder={item.value} />
                                : null

                            )

                        })
                    }
                </section>

            )

        })
    }

    <style jsx>{`
    
    .guideEditorParagraph{
        padding: 5px 25px;
        margin: 20px 0;
        z-index: 2;
    }
    .guideEditorParagraph > h1::before{
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        background: black;
        position: absolute;
        transform: translate(-150%, 0);
        border-radius: 100%;
        filter: blur(2px)
    }
    .guideEditorParagraph > h1{
        font-size: 35px;
        margin: 10px 0;
        display: flex;
        align-items: center;
    }
    input{
        z-index: 2;
        position: relative;
    }
    
    `}</style>

    </>
}

// steps: [
//     {
//         title: "Titulo del paso/step",
//         content: [
//             {
//                 type: "tipo de contenido de este parrafo (text / image)",
//                 vale: "contenido del parrafo (texto / referencia de imagen)"
//             }
//         ]
//     }
// ]