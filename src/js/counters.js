export class Counters {
    /**
     * @type { (countersElements: [
     *  {
     *      updateElement?: boolean,
     *      element: HTMLElement,
     *      marker: string,
     *      data: () => string,
     *      sign?: string,
     *      signPosition?: 'start' | 'end'
     *  }
     * ], markersElements: string[], updateTime: number) }
     */
    constructor(countersElements, markersElements, updateTime) {
        this.countersElements = countersElements;
        this.markersElements = markersElements;
        // this.dataToCounter = dataToCounter;
        this.updateTime = updateTime;
    }

    /**
     * @type {(markers: [])}
     */
    set markersElements(markers) {
        markers.forEach(marker => {
            this.countersElements.forEach(counter => {
                if(counter.marker === marker) {
                    !!counter.updateElement ? 
                        setInterval(() => {
                            
                            const signPosition = !!counter?.signPosition ? counter?.signPosition: 'start';

                            const textContent = {
                                start: `${counter.sign} ${counter.data()}`,
                                end: `${counter.data()} ${counter.sign}`,
                                default: counter.data()
                            };

                            counter.element.textContent = textContent[!!counter.sign ? signPosition: "default"];
                        }, this.updateTime): 
                        null;
                }

                const signPosition = !!counter?.signPosition ? counter?.signPosition: 'start';

                const textContent = {
                    start: `${counter.sign} ${counter.data()}`,
                    end: `${counter.data()} ${counter.sign}`,
                    default: counter.data()
                };
                counter.element.textContent = textContent[!!counter.sign ? signPosition: "default"];
            }); 
        }); 
    }
};