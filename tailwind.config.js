/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                bgLight: '#F2F2F2',
                bgDark: '#000000',
                noHover: '#757575',
                rgbhover: 'rgb(35, 85, 199)',
                buttonDarkHover: 'rgba(255, 255, 255, 0.19)',
                panelText: 'rgb(179, 179, 179);',
                panelRadio: 'rgb(229, 229, 229);',
                panelTextLight: 'rgb(102, 102, 102);',
                panelTextLightBlack: 'rgb(74, 75, 99)',
                panelSvg: 'rgb(28, 28, 28);',
                overlayWhite: 'rgba(0, 0, 0, 0.5)',
                buttonLightHover: 'rgba(0, 0, 0, 0.063)',
            },
            gridTemplateColumns: {
                panelGrid: 'repeat(auto-fill, minmax(70px, 1fr))',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            boxShadow: {
                wfShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 10px 0px',
            },
            transitionProperty: {
                'wf-opacity': 'opacity',
                flexWidth: 'flex, width',
            },
            transitionDuration: {
                'wf-300': '0.3s',
            },
            transitionTimingFunction: {
                'wf-ease': 'ease',
            },
            transitionDelay: {
                'wf-none': '0s',
            },
            fontFamily: {
                custom: ['Akkurat', 'sans-serif'],
            },
            flex: {
                11: '0 1 0%',
                2: ' 2 1 0%',
                3: ' 3 1 0%',
            },
            maxHeight: {
                navDrop: 'calc(-80px + 100vh)',
            },
            spacing: {
                panelButton: 'calc(100% + 1rem)',
            },
        },
    },
    plugins: [],
}
