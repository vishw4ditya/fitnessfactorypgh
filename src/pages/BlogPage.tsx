import React, { useState } from 'react';
import { ArrowRight, BookOpen, X } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { BLOG_POSTS, BlogPost } from '../data/facilities';

export const BlogPage: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <PageLayout
      title="Training Journal & Local Blog | Fitness Factory Pittsburgh"
      description="Strength training tips, mobility breakdowns, and East Liberty gym updates from Fitness Factory Pittsburgh coaches."
    >
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        <div className="max-w-2xl space-y-3">
          <Badge tone="dark" dot>
            COACHING &amp; NEIGHBORHOOD DISPATCH
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase text-white leading-[0.97]">
            PITTSBURGH <span className="text-[#7DB7FF]">LIFTING JOURNAL</span>
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            No clickbait trends—practical programming advice, technique mechanics, and updates
            straight from our Highland Avenue coaching team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Card key={post.id} className="overflow-hidden flex flex-col">
              <div className="relative h-52 overflow-hidden bg-[#0E1117]">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover brightness-80 contrast-110 transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge tone="blue">{post.tag}</Badge>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {post.date} &bull; {post.readTime}
                  </p>
                  <h2 className="font-display text-xl font-bold uppercase text-white mt-1.5 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">{post.excerpt}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePost(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-[0.1em] text-[#7DB7FF] hover:text-white transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>READ ARTICLE</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {activePost && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="blog-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            onClick={() => setActivePost(null)}
          >
            <div
              className="w-full max-w-2xl rounded-2xl bg-[#131720] border border-[#2D3443] border-t-2 border-t-[#3B82F6] p-6 sm:p-8 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Badge tone="blue">{activePost.tag}</Badge>
                  <h2
                    id="blog-modal-title"
                    className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mt-2"
                  >
                    {activePost.title}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    {activePost.date} &bull; {activePost.readTime}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePost(null)}
                  aria-label="Close article"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-sm text-slate-300 leading-relaxed pt-2">
                {activePost.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-[#242934] flex justify-end gap-2">
                <Button variant="secondary" size="sm" onClick={() => setActivePost(null)}>
                  CLOSE
                </Button>
                <Button variant="primary" size="sm" to="/trainers#consultation-form">
                  BOOK FREE ASSESSMENT
                </Button>
              </div>
            </div>
          </div>
        )}
      </section>
    </PageLayout>
  );
};
