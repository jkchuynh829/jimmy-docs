import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    useNextSeoProps() {
        return {
            titleTemplate: '%s',
        }
    },
    logo: <span>Jimmy Huynh: Software Engineer</span>,
    project: {
        link: 'https://github.com/jkchuynh829',
    },
    docsRepositoryBase: 'https://github.com/jkchuynh829/jimmy-docs',
    footer: {
        text: 'jimmyhuynh.dev 2023',
    },
}

export default config
