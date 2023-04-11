export const getTheme = () => localStorage.getItem('theme');

export const toggleTheme = () => localStorage.setItem('theme', getTheme() === 'dark' ? 'ligth': 'dark');

export const initTheme = (defaultTheme) => localStorage.setItem('theme', getTheme() ?? defaultTheme);

/**
 * 
 */
export class Theme {
    /**
     * 
     * @type { (defaultTheme: string, themeElement: HTMLElement) }
     */
    constructor(defaultTheme, themeElement) {
        this.defaultTheme = defaultTheme;
        this.themeElement = themeElement;
    };

    initElement() {
        const themeChange = new CustomEvent('themeChange', {
            detail: {
                themeBefore: getTheme(),
                themeAfter: null,
            }
        });
        const themeRoot = document.querySelector('[data-bs-theme]');

        this.themeElement.dataset.theme = this.defaultTheme;

        this.themeElement.addEventListener('click', (e) => {
            toggleTheme();


            themeChange.detail.themeAfter = getTheme();
            
            this.themeElement.dataset.theme = getTheme();

            return document.dispatchEvent(themeChange);
        }); 
    };

};