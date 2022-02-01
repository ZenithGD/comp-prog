import React from 'react'
import Banner from '../components/display/Banner'
import ListOfCards from '../components/display/ListOfCards'

const cards = [
    {
        title: "Kitty I",
        desc: "A problem about kittens",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Cute_grey_kitten.jpg/1280px-Cute_grey_kitten.jpg",
        tags: [
            "cute", "easy"
        ],
        to: "/problems/1"
    },
    {
        title: "Kitty II",
        desc: "Another problem about kittens",
        photo: "https://ichef.bbci.co.uk/news/640/cpsprodpb/150EA/production/_107005268_gettyimages-611696954.jpg",
        tags: [
            "cute", "not so easy"
        ],
        to: "/problems/2"
    },
    {
        title: "Puppy I",
        desc: "A problem about puppies",
        photo: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTtS7f2IeRMF3KHJJOl5CA5TYkXLiNK98uI3BA3T-A9GEAZMnMeAhA14fum1RC4UVMzQhulVYhVulImFDU11Eo",
        tags: [
            "bark", "woof", "dog computing"
        ],
        to: "/problems/7"
    },
    {
        title: "Puppy II",
        desc: "Still a problem about animals, and I don't regret it!",
        photo: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcS6EyN6Z70IrXDyMEQvc5wb94_RoF9dtNMYcbd_2g67B6ROEoN5bts86TrbD7D3xKsdcZNgrrtAk_L4Rm_YXIk",
        tags: [
            "recursion", "woof"
        ],
        to: "/problems/3"
    },
    {
        title: "Zeros of Riemann Zeta function",
        desc: "I bet 200€ you can't solve this problem.",
        photo: "https://i.ytimg.com/vi/sD0NjbwqlYw/maxresdefault.jpg",
        tags: [
            "what", "the", "hell"
        ],
        to: "/problems/4"
    },
    {
        title: "Puppy I",
        desc: "A problem about puppies",
        photo: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTtS7f2IeRMF3KHJJOl5CA5TYkXLiNK98uI3BA3T-A9GEAZMnMeAhA14fum1RC4UVMzQhulVYhVulImFDU11Eo",
        tags: [
            "bark", "woof", "dog computing"
        ],
        to: "/problems/5"
    },
    {
        title: "Puppy II",
        desc: "A problem about puppies",
        photo: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTtS7f2IeRMF3KHJJOl5CA5TYkXLiNK98uI3BA3T-A9GEAZMnMeAhA14fum1RC4UVMzQhulVYhVulImFDU11Eo",
        tags: [
            "bark", "woof", "dog computing"
        ],
        to: "/problems/6"
    }
]

const carouselData = [
    {
        title: "Kitty league",
        desc: "Kittens everywhere!",
        date: "16-Nov-2021",
        rem: 10519014,
        url: "/"
    }
]

function MainLayout() {
    return (
        <div className='flex flex-col bg-gray-900'>
            <Banner />
            <div className="h-full p-20 flex justify-center items-start flex-col">
                <h1 className="text-5xl text-orange-400">Destacados</h1>
                <ListOfCards cards={cards} />
            </div>
        </div>
    )
}

export default MainLayout
