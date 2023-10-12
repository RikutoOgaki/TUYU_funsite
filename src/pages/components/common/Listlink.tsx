import { useState, useEffect } from 'react'
import Link from 'next/link'
import style from '@/styles/components/common/listlink.module.scss'

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
            <ul className={style.List}>
                {
                    state.linkdata.map((v, idx) =>
                        <li key={idx} className={style.listItem}>
                            <Link className={style.link} href={v.linkaddress}>{v.link}</Link>
                        </li>
                    )
                }
            </ul>
        </>
    )
}