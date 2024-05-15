import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const posts = [
        {
            "id": 1,
            "title": "His mother had always taught him",
            "description": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
            "img": "https://images.lsnglobal.com/NPQbcKMiMaDjP9Nd0BT4XRgc-gU=/365x203/filters:quality(80):strip_exif():strip_icc()/filestorage/images/114068/menopause-friendly-products-image.jpg",
            "tags": [
                "history",
                "american",
                "crime"
            ],
            "reactions": 2
        },
        {
            "id": 2,
            "title": "He was an expert but not in a discipline",
            "description": "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
            "img": "https://images.lsnglobal.com/pCnu-AXmwflJfBLkauR3LpF7P0Q=/365x203/filters:quality(80):strip_exif():strip_icc()/filestorage/images/111054/julien-thomas-limited-edition.jpg",
            "tags": [
                "french",
                "fiction",
                "english"
            ],
            "reactions": 2
        },
        {
            "id": 3,
            "title": "Dave watched as the forest burned up on the hill.",
            "description": "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
            "img": "https://images.lsnglobal.com/gDsEjEWFI8uChJ3Arw1YrxxBw0s=/365x203/filters:quality(80):strip_exif():strip_icc()/filestorage/images/105715/07-identity.png",
            "tags": [
                "magical",
                "history",
                "french"
            ],
            "reactions": 5
        },
        {
            "id": 4,
            "title": "All he wanted was a candy bar.",
            "description": "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
            "img": "https://images.lsnglobal.com/ca72cQyAMD7pQQqtZ-StVaDR8dU=/365x203/filters:quality(80):strip_exif():strip_icc()/filestorage/images/111625/fqd0jkvwubev1dp.jpeg",
            "tags": [
                "mystery",
                "english",
                "american"
            ],
            "reactions": 1
        },
        {
            "id": 5,
            "title": "Hopes and dreams were dashed that day.",
            "description": "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
            "img": "https://images.lsnglobal.com/9_90ikI3AZmkXM9Q-Mhj8GUQuLA=/365x203/filters:quality(80):strip_exif():strip_icc()/filestorage/images/119828/img-8359.JPG",
            "tags": [
                "crime",
                "mystery",
                "love"
            ],
            "reactions": 2
        }
    ];

    return (
        <div className="home">
            <div className="posts">
                {posts.map(post=>(
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src="post.img" alt="" />
                            <div className="content">
                                <Link className="link" to={'/post/${post.id}'}>
                                <h1>{post.title}</h1>
                                <p>{post.desc}</p>
                                <button>Read More</button>
                                    </Link>
                            </div>
                             </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
