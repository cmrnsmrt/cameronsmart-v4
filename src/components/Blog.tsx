import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "Designing Resilient Microservices: Lessons from Production",
      excerpt: "A deep dive into the patterns and practices that make microservices architectures robust and fault-tolerant in real-world scenarios.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Architecture",
      featured: true
    },
    {
      title: "Event-Driven Architecture: When and How to Implement",
      excerpt: "Exploring the benefits and challenges of event-driven systems, with practical examples and implementation strategies.",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Design Patterns"
    },
    {
      title: "The Evolution of My Software Engineering Career",
      excerpt: "Reflections on growth, challenges, and the key decisions that shaped my journey from junior developer to software architect.",
      date: "February 10, 2024",
      readTime: "5 min read",
      category: "Career"
    },
    {
      title: "Building Scalable APIs: Best Practices and Common Pitfalls",
      excerpt: "A comprehensive guide to designing APIs that can handle growth, including versioning strategies and performance considerations.",
      date: "January 22, 2024",
      readTime: "10 min read",
      category: "Development"
    },
    {
      title: "Code Review Excellence: Beyond Finding Bugs",
      excerpt: "How to conduct code reviews that improve code quality, share knowledge, and strengthen team collaboration.",
      date: "January 8, 2024",
      readTime: "7 min read",
      category: "Leadership"
    },
    {
      title: "Domain-Driven Design in Practice",
      excerpt: "Real-world applications of DDD principles and how they can improve software architecture and team communication.",
      date: "December 20, 2023",
      readTime: "9 min read",
      category: "Architecture"
    }
  ];

  const categories = ["All", "Architecture", "Design Patterns", "Career", "Development", "Leadership"];

  return (
    <section id="blog" className="section-padding bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Insights, experiences, and reflections on software engineering and architecture
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className={`${
                category === "All" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-primary hover:text-primary-foreground"
              } transition-colors`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts[0] && (
          <div className="tech-card mb-12 group cursor-pointer">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center space-x-4 text-sm text-foreground-muted">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">
                    Featured
                  </span>
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h3>
                <p className="text-foreground-muted leading-relaxed text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-foreground-muted">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <Button className="hero-button group-hover:scale-105">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <div key={index} className="tech-card group cursor-pointer h-full flex flex-col">
              <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <h4 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-foreground-muted leading-relaxed text-sm line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <div className="pt-4 border-t border-card-border mt-4">
                <div className="flex items-center justify-between text-sm text-foreground-muted">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full mt-3 justify-start p-0 h-auto text-primary hover:text-accent font-semibold"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="accent-button">
            View All Blog Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;