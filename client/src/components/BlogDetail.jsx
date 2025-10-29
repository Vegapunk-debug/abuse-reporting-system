import React from 'react';
import { useParams } from 'react-router-dom';

const blogs = [
    {
        id: 1,
        date: 'July 1, 2025',
        title: 'How to Recognize Signs of Child Abuse',
        author: 'Dr. Anjali Verma',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        image: 'https://www.theknowledgeacademy.com/_files/images/5Rs_of_Safeguarding.png',
        content: `Have you ever wondered what stands between a vulnerable individual and the threats they might face? Safeguarding isn’t just about following rules - it’s about creating a safe haven where everyone’s rights and dignity are respected. The 5Rs of Safeguarding serve as a crucial framework for ensuring this protection, emphasising the importance of proactive care and vigilance. 

Throughout this blog, we’ll explore how these 5Rs of Safeguarding can revolutionise the way we protect children, at-risk adults, and anyone who might need extra care. Let’s dive in, enhance our awareness, and solidify a culture of safety- together.
What is the Meaning of Safeguarding Children and Vulnerable Adults? 
Safeguarding is a comprehensive approach to protecting vulnerable individuals, including at-risk adults and children, from harm and abuse. For children, it involves ensuring their welfare and protection from physical, emotional, and sexual abuse, as well as neglect. 

For vulnerable adults, safeguarding focuses on preventing harm and ensuring they receive appropriate care that maintains their dignity and well-being. This protection system addresses risks arising from factors like age, disability, or circumstances that increase vulnerability to mistreatment.

Key components of Safeguarding include: 

a) Prevention 

b) Protection 

c) Partnership 

d) Empowerment 

e) Accountability

What are the 5Rs of Safeguarding? 

1) Recognise  
Recognition is the first crucial step in Safeguarding. It involves being able to identify signs and indicators of potential harm, abuse, or neglect. Professionals and individuals involved in the care of children or vulnerable adults must be trained to recognise various forms of abuse, whether it's physical, emotional, sexual, or neglect.  

Recognising signs may involve observing changes in behaviour, physical appearance, or communication patterns. Training and awareness campaigns are essential to ensure that those in contact with at-risk individuals can identify potential risks and act promptly.  

2) Respond  
Once signs of harm or abuse are recognised, the next step is to respond appropriately. Responding involves taking immediate action to ensure the safety and well-being of the individual at risk. This might include providing support, removing the person from a harmful situation, or contacting relevant authorities.  

3) Report 

Reporting is a critical aspect of Safeguarding. Professionals and individuals who suspect abuse must report their concerns to the appropriate authorities.  

4) Record
Recording information is vital for maintaining a clear and comprehensive account of Safeguarding concerns and actions taken.  

5) Refer  
Referring involves making appropriate arrangements for further support, investigation, or intervention by referring the case to relevant agencies or professionals.  

### What are the Five Main Safeguarding Issues?
The 5 main safeguarding issues are harm, abuse, neglect, exploitation, and maltreatment.  

### What are the 3 Ps of Safeguarding?
Prevention, Protection, and Partnership.  

### Conclusion
The '5Rs of Safeguarding'—Recognise, Respond, Report, Record, and Refer—form a comprehensive framework essential for protecting vulnerable individuals.  
`
    },
    {
        id: 2,
        date: 'June 24, 2025',
        title: ' What Happens After You File an Anonymous Report?',
        author: 'Inspector Rajeev Mehra',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        image: 'https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg',
        content: 'Filing an anonymous report ensures your safety while contributing to community safety. After submission, the report is reviewed by law enforcement, who may investigate further. You can follow up anonymously if needed, but remember that anonymity protects you from retaliation.',
    },
    {
        id: 3,
        date: 'June 10, 2025',
        title: 'Why Reporting Drug Activity Matters',
        author: 'Ritu Shah, Community Activist',
        avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
        image: 'https://images.pexels.com/photos/5428834/pexels-photo-5428834.jpeg',
        content: 'Drug activity not only harms individuals but also destabilizes communities. Reporting suspicious behavior helps law enforcement dismantle networks and provide support to those affected. Your report can lead to interventions that save lives and improve public safety.',
    },
    {
        id: 4,
        date: 'May 20, 2025',
        title: 'Your Legal Rights When Reporting a Crime',
        author: 'Advocate Sameer Kulkarni',
        avatar: 'https://images.pexels.com/photos/5380641/pexels-photo-5380641.jpeg',
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
        content: 'Reporting a crime is a civic duty, and you have legal protections. Whistleblower laws shield you from retaliation, and in many jurisdictions, anonymous reporting is allowed. Understand your rights to ensure you feel secure when coming forward.',
    },
];

function BlogDetail() {
    const { id } = useParams();
    const blog = blogs.find(b => b.id === parseInt(id));

    if (!blog) {
        return <div className="py-20 px-6 md:px-20 text-center">Blog not found</div>;
    }

    return (
        <section className="py-20 px-6 md:px-20 bg-white">
            <div className="max-w-4xl mx-auto">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
                />
                <p className="text-sm text-blue-600 font-semibold uppercase mb-4">
                    {blog.date}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {blog.title}
                </h1>
                <div className="flex items-center gap-4 mb-8">
                    <img
                        src={blog.avatar}
                        alt={blog.author}
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <p className="font-semibold text-gray-800">{blog.author}</p>
                        <p className="text-sm text-gray-600">Author</p>
                    </div>
                </div>
                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed">{blog.content}</p>
                </div>
            </div>
        </section>
    );
}

export default BlogDetail;
