import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";

import { useRouter } from 'next/router'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import dynamic from 'next/dynamic'
import Navbar from '../../components/display/Navbar'

import OptionDropdown from "../../components/ui/OptionDropdown"

import Editor from '@monaco-editor/react'

const md = `# Problema nº X

A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

~~~
hola
~~~
`

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

    useEffect(() => {

        // Consultar al servidor sobre el problema
        
        setProbName(`Problema ${problem}`)
        setProbStatement(md)

        return () => {}
    }, [problem, probName, probStatement])

    return (
        <>
            <Navbar />
            <div className="h-full w-full p-10 bg-gray-800">
                <div className="flex w-full">
                    <div className="flex-1 p-2 border-4 border-orange-400 m-5">
                        <ReactMarkdown className="prose" remarkPlugins={[remarkGfm]}>
                            {`<span style="color: red;">${probStatement}</span>`}
                        </ReactMarkdown>
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
                            height="70vh"
                            theme="vs-dark"
                            language={language}
                            value={input}
                            defaultLanguage={mappings[0].lang}
                            defaultValue={mappings[0].sample}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProblemLayout
