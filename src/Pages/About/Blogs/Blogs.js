import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='m-4 '>
                <h4 className='text-center'>Ques.no.1-Difference between javascript and nodejs</h4>
                <h5 className='text-center'>Ans to the ques no.1</h5>
                <p>1.JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.<br />
                    2.JavaScript is normally used for any client-side activity for one web application. Whereas Node JS mainly used for accessing or running any operating system for non-blocking operation. <br />
                    3.JavaScript running in any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). So JavaScript programming is very easy to write, and put any running environment means proper browser. Whereas Node JS only support the V8 engine, which googles chrome specific. But whether it supports the V8 engine, written JavaScript code can able to run in any environment. So there has no browser-specific constraint on it.etc. <br /></p>
            </div>
            <div className='m-4 '>
                <h4 className='text-center'>ques.no.2-When should we use nodejs and when should we use mongodb</h4>
                <h5 className='text-center'>Ans to the ques no.2</h5>
                <p>MongoDB and NodeJS are two different technologies.Any project needs a programming environment and a runtime library that offers we basic programming tools/support and can compile and/or interpret our code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc....If our application needs the ability to persistently store data in a way that we can efficiently query or update it later, then we would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases.Different databases have different strengths (things they are best at) and different ways of using.</p>
            </div>
            <div className='m-4'>
                <h4 className='text-center'>ques.no.3-Difference between SQL and NoSQL</h4>
                <h5 className='text-center'>Ans to the ques no.3</h5>
                <p>The five critical differences between SQL vs NoSQL are: <br />
                    1.SQL databases are relational, NoSQL databases are non-relational. <br />
                    2.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
                    3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
                    4.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
                    5.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
            </div>
        </div>
    );
};

export default Blogs;