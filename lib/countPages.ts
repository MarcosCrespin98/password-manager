import { Element } from "@prisma/client";

export function countPages(elements: Element[]) {
    const pageCounts: Record<string, number> = {};

    elements.forEach((element) => {
        const page = element.name;
        if (page) {
            if (pageCounts[page]) {
                pageCounts[page]++;
            } else {
                pageCounts[page] = 1;
            }
        }
    });

    const totalPages = Object.values(pageCounts).reduce((sum, count) => sum + count, 0);

    return {
        pageNameCounts: pageCounts,
        totalPages,
    };
}