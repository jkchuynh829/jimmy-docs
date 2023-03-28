import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    useNextSeoProps() {
        return {
            titleTemplate: '%s',
        }
    },
    logo: <span>Jimmy Huynh: </span>,
    project: {
        link: 'https://github.com/jkchuynh829',
    },
    docsRepositoryBase: 'https://github.com/jkchuynh829/jimmy-docs',
    footer: {
        text: 'jimmyhuynh.dev',
    },
}

export default config
