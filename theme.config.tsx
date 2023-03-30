import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { inject } from '@vercel/analytics'

inject()

const config: DocsThemeConfig = {
    useNextSeoProps() {
        return {
            titleTemplate: '%s',
        }
    },
    logo: <span>Jimmy Huynh</span>,
    project: {
        link: 'https://github.com/jkchuynh829',
    },
    docsRepositoryBase: 'https://github.com/jkchuynh829/jimmy-docs',
    footer: {
        text: 'jimmyhuynh.dev',
    },
}

export default config
