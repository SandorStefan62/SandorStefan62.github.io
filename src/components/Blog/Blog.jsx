import React, { useEffect, useRef, useState } from "react";

function Blog() {
    const [searchedItem, setSearchedItem] = useState('');
    const content = [{
        id: 1,
        hContent: "What is Lorem Ipsum?",
        pContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 2,
        hContent: "Why do we use it?",
        pContent: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
        id: 3,
        hContent: "Where does it come from?",
        pContent: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
    },
    {
        id: 4,
        hContent: "Where can I get some?",
        pContent: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    }];

    const highlightText = (text, search) => {
        const regex = new RegExp(search, 'gi');
        return text.replace(regex, (match) => `<mark>${match}</mark>`);
    }

    const handleSearch = (e) => {
        setSearchedItem(e.target.value);
    }

    // const scrollToRef = (ref) => {
    //     if (ref && ref.current) {
    //         const element = ref.current;
    //         const markElement = element.querySelector('mark');
    //         if (markElement) {
    //             const { top } = markElement.getBoundingClientRect();
    //             const elementTop = top + window.scrollY - 100;
    //             console.log("Before scroll: " + top + " " + elementTop)
    //             window.scrollTo({
    //                 top: elementTop,
    //                 behavior: "smooth"
    //             });

    //             setTimeout(() => {
    //                 const { top: newTop } = markElement.getBoundingClientRect();
    //                 const newElementTop = newTop + window.scrollY - 100;
    //                 console.log('After scroll:', newTop + " " + newElementTop);
    //             }, 500);
    //         }
    //     }
    // }

    // const refs = useRef(content.map(() => React.createRef()));

    // useEffect(() => {
    //     const scrollToMatch = () => {
    //         const matchIndex = content.findIndex((item) => {
    //             return item.hContent.toLowerCase().includes(searchedItem.toLowerCase()) ||
    //                 item.pContent.toLowerCase().includes(searchedItem.toLowerCase());
    //         });
    //         if (matchIndex !== -1) {
    //             scrollToRef(refs.current[matchIndex]);
    //         }
    //     }

    //     scrollToMatch();
    // }, [searchedItem, content]);

    return (
        <div className="w-full h-screen flex flex-col items-center">
            <div className="w-full p-20">
                <input type="text" placeholder="Search..." value={searchedItem} onChange={handleSearch} className="w-full h-10 p-2 rounded-md" />
            </div>
            <h1 className="w-full text-center text-7xl mb-48">Lorem Ipsum</h1>
            {content.map((item, index) => (
                <React.Fragment key={item.id}>
                    <h1 className="w-full p-10 text-5xl"
                        // ref={refs.current[index]}
                        dangerouslySetInnerHTML={{
                            __html: highlightText(item.hContent, searchedItem)
                        }}
                    ></h1>
                    <p className="w-full p-10 text-2xl"
                        dangerouslySetInnerHTML={{
                            __html: highlightText(item.pContent, searchedItem)
                        }}
                    ></p>
                </React.Fragment>
            ))}
        </div>
    )
}

export default Blog;