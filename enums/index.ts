interface AnimalTypesEnum {
    [key: string]: {
        image: {
            url: string;
            styles?: {
                backgroundPosition?: string;
                objectPosition?: string;
            };
        };
        photographer: {
            name: string;
            url: string;
        };
    };
}

export const ANIMAL_TYPES: AnimalTypesEnum = {
    Dog: {
        image: {
            url: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
        },
        photographer: {
            name: "Karsten Winegeart",
            url: "https://unsplash.com/@karsten116",
        },
    },
    Cat: {
        image: {
            url: "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
            styles: {
                backgroundPosition: "center top",
            },
        },
        photographer: {
            name: "Cédric VT",
            url: "https://unsplash.com/@cedric_photography",
        },
    },
    Rabbit: {
        image: {
            url: "https://images.unsplash.com/photo-1589933767411-38a58367efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
        },
        photographer: {
            name: "Andriyko Podilnyk",
            url: "https://unsplash.com/@andriyko",
        },
    },
    "Small & Furry": {
        image: {
            url: "https://images.unsplash.com/photo-1452721226468-f95fb66ebf83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
        },
        photographer: {
            name: "Silje Roseneng",
            url: "https://unsplash.com/@siljeroseneng",
        },
    },
    Horse: {
        image: {
            url: "https://images.unsplash.com/photo-1534681534056-461f50de526f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
        },
        photographer: {
            name: "Roman Fox",
            url: "https://unsplash.com/@snapsbyfox",
        },
    },
    Bird: {
        image: {
            url: "https://images.unsplash.com/photo-1550853024-fae8cd4be47f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
            styles: {
                backgroundPosition: "-1rem center",
            },
        },
        photographer: {
            name: "Zdenek Machácek",
            url: "https://unsplash.com/@zmachacek",
        },
    },
    "Scales, Fins & Other": {
        image: {
            url: "https://images.unsplash.com/photo-1495594059084-33752639b9c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
        },
        photographer: {
            name: "Pietro Jeng",
            url: "https://unsplash.com/@pietrozj",
        },
    },
    Barnyard: {
        image: {
            url: "https://images.unsplash.com/photo-1565079512417-25b61e17bf76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
            styles: {
                backgroundPosition: "left center",
            },
        },
        photographer: {
            name: "Hugo Kruip",
            url: "https://unsplash.com/@hugo1951",
        },
    },
};