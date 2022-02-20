import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import dynamic from 'next/dynamic'
import Navbar from '../../components/display/Navbar'

import OptionDropdown from "../../components/ui/OptionDropdown"

import Editor from '@monaco-editor/react'
import htmr from 'htmr'
import Button from '../../components/ui/Button'

const st = `
<h1 style="font-size: xx-large">Título</h1>
<p>
Problema
</p>`

const mappings = [
    {
        name: "C++",
        lang: "cpp",
        sample: `#include <iostream>

int main() {
    std::cout << "Hello C++!" << std::endl; 
}
`
    },
    {
        name: "Java",
        lang: "java",
        sample: `package main;

public class Main {
    public static void main(String[] args) {
        System.out.Println("Hello world!");
    }
}
        `
    },
    {
        name: "Javascript",
        lang: "javascript",
        sample: `console.log("Hello world!")`
    }
]


function ProblemLayout() {

    const router = useRouter()
    const { problem } = router.query

    const [probName, setProbName] = useState("no")
    const [probStatement, setProbStatement] = useState("no")

    const [language, setLanguage] = useState("c_cpp");
    const [input, setInput] = useState("");

    const onChange = (ev) => {
        console.log(mappings[ev.target.value].name)
        setLanguage(mappings[ev.target.value].lang)
        setInput(mappings[ev.target.value].sample)
    }

    const executeCode = async (e) => {
        e.preventDefault()
        await fetch('/api/exec', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({input: input, lang: language})
        })
    }

    useEffect(() => {
        // Consultar al servidor sobre el problema

        setProbName(`Problema ${problem}`)
        setProbStatement(st)
    }, [problem, probName, probStatement])

    return (
        <>
            <Navbar />
            <div className="h-full w-full p-20">
                <div className="flex w-full">
                    <div className="flex-1 p-2 border-4 border-orange-400 m-5 text-white">
                        {htmr(probStatement)}
                    </div>

                    <div className="flex-1 p-2 border-4 border-orange-400 m-5">
                        <div className="py-2">
                            <p className="inline-block mx-2 text-orange-400">Select your language:</p>
                            <OptionDropdown
                                className="inline-block h-10 rounded-md appearance-none outline-orange-400 outline-0 border-2 border-orange-400 px-2 bg-gray-800 text-orange-400"
                                onChange={onChange}
                                data={mappings}
                            />
                        </div>
                        <Editor
                            height="60vh"
                            theme="vs-dark"
                            language={language}
                            value={input}
                            defaultLanguage={mappings[0].lang}
                            defaultValue={mappings[0].sample}
                            onChange={(v, e) => {setInput(v)}}
                        />
                        <div className='flex pt-6 w-full'>
                            <div className='w-full'>
                                <Button>
                                    <p className='text-orange-400'>
                                        Subir código...
                                    </p>
                                </Button>
                            </div>
                            <div className='flex gap-4'>
                                <Button onClick={executeCode}>
                                    <p className='text-orange-400'>
                                        Ejecutar
                                    </p>
                                </Button>
                                <Button>
                                    <p className='text-orange-400'>
                                        Comprobar
                                    </p>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProblemLayout
