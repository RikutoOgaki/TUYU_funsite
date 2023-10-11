import { useState, useEffect } from 'react'
import Link from 'next/link'

type Props = {
    linkdata: Array<Data>
}

type Data = {
    link: string,
    linkaddress: string
}

export function Listlink(props: Props) {

    const [state, setState] = useState<Props>({
        linkdata: props.linkdata
    })

    useEffect(() => {
        setState({
            ...state,
            linkdata: props.linkdata
        })
    }, [props])

    return (
        <>
            <ul>
                {
                    state.linkdata.map((v, idx) =>
                        <li key={idx}>
                            <Link href={v.linkaddress}>{v.link}</Link>
                        </li>
                    )
                }
            </ul>
        </>
    )
}