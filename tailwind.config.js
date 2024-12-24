/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './composables/**/*.{js,ts}',
        './plugins/**/*.{js,ts}',
        './app.{js,ts,vue}'
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#EAB280',
                'primary-dark': '#000',
                'primary-light': '#fff',
                'light': '#FFFBE9',
                'secondary': '#343434',
                'gray-light': '#F4F4F4',
                'footer': '#B49B73',
                'icon-yellow': '#FFBB00',
                'gradient-left': '#37538c',
                'gradient-right': '#123681',
                'admin-primary': '#3468d3',
                'admin-content': '#333',
                'black-opacity': 'rgba(0, 0, 0, 0.6)'
            },
            backgroundImage: {
                'banner': "url('~/assets/images/cars/car-1.jpg')",
                'footer-texture': "url('~/assets/images/footer-texture.png')"
            },
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '992px',
                    xl: '1140px',
                    xxl: '1320px'
                }
            }
        }
    },
    plugins: []
};

