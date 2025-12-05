export default [
    {
      name: "Instagram Caption",
      desc: "Create short, catchy Instagram captions tailored to your topic.",
      category: "Instagram",
      label: "Instagram",
      icon: "https://cdn-icons-png.flaticon.com/128/1384/1384063.png",
      aiPrompt:
        "Write 3 concise Instagram captions about {topic}. Keep them 1–3 lines and suggest 3 relevant hashtags.",
      slug: "instagram-caption",
    },
  
    {
      name: "Reddit Post",
      desc: "Write natural, discussion-ready Reddit-style posts.",
      category: "Reddit",
      label: "Reddit",
      icon: "https://cdn-icons-png.flaticon.com/128/3536/3536761.png",
      aiPrompt:
        "Write a Reddit-style text post about {topic}. Start with a strong hook and use a conversational tone.",
      slug: "reddit-post",
    },
  
    {
      name: "Facebook Post",
      desc: "Story-driven Facebook posts with clear messaging.",
      category: "Facebook",
      label: "Facebook",
      icon: "https://cdn-icons-png.flaticon.com/128/733/733547.png",
      aiPrompt:
        "Write 2 Facebook posts about {topic}. Use light storytelling and include a friendly CTA.",
      slug: "facebook-post",
    },
  
    {
      name: "X Post",
      desc: "Short, engaging posts tailored for X.",
      category: "Twitter",
      label: "X",
      icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png", 
      aiPrompt:
        "Write 5 short X posts about {topic}. Stay under 280 characters and include a hook.",
      slug: "twitter-post",
    },
  
    {
      name: "Blog Content Ideas",
      desc: "Generate engaging blog content ideas for your niche.",
      category: "Blog",
      label: "Blog",
      icon: "https://cdn-icons-png.flaticon.com/128/6114/6114045.png", 
      aiPrompt:
        "Give 5 content ideas for a blog about {topic}. Keep them unique and SEO-friendly.",
      slug: "blog-content-ideas",
    },
  
    {
      name: "Rewrite Text (Plagiarism Free)",
      desc: "Rewrite text into a clean, plagiarism-free version.",
      category: "Rewriting Tool",
      label: "Rewrite",
      icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
      aiPrompt:
        "Rewrite the given article to be plagiarism-free and natural. Output in a rich-text-friendly format.",
      slug: "rewrite-article",
      form: [
        {
          label: "🤖 Paste your article or blog post here",
          field: "textarea",
          name: "article",
          required: true,
        },
      ],
    },
  
    {
      name: "English Grammar Check",
      desc: "Fix grammar, clarity, and punctuation instantly.",
      category: "English",
      label: "Grammar Check",
      icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
      aiPrompt:
        "Correct grammar, punctuation, and clarity for the given text and output the improved version.",
      slug: "english-grammar-checker",
      form: [
        {
          label: "✍️ Paste the text you want checked",
          field: "textarea",
          name: "inputText",
          required: true,
        },
      ],
    },
  
    {
      name: "YouTube Description",
      desc: "Generate short, engaging YouTube descriptions with emojis.",
      category: "Youtube Tool",
      label: "YouTube",
      icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
      aiPrompt:
        "Write a 3–5 line YouTube description with emojis and a CTA. Suggest 5 relevant tags.",
      slug: "youtube-description",
      form: [
        {
          label: "🎬 Describe your video topic / outline",
          field: "text",
          name: "topic",
          required: true,
        },
      ],
    },
  ];
  