"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function FinalPortfolio() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container-custom py-5 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            Final Portfolio
          </span>
        </div>
      </header>

      {/* Title block */}
      <section className="bg-gradient-to-b from-[hsl(28_90%_92%)] via-[hsl(30_75%_94%)] to-[hsl(30_60%_97%)] border-b border-border">
        <div className="container-custom max-w-3xl py-16 md:py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-4">
            English 105 &middot; Spring 2026
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-4">
            Understanding Social Anxiety Disorder Through Attachment Theory
          </h1>
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            Final Portfolio Assignment by Avinh Huynh
          </p>
        </div>
      </section>

      <main className="container-custom py-12 md:py-16 max-w-3xl">

        {/* 1. About the Author */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 mb-6">
            About the Author
          </h2>
          <div className="grid md:grid-cols-[160px,1fr] gap-6 md:gap-8 items-start">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-1 ring-border shadow-[0_12px_40px_-12px_rgba(234,88,12,0.3)]">
              <Image
                src="/headshot-square.jpg"
                alt="Avinh Huynh"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="prose-essay">
                Avinh Huynh is a Computer Science graduate from San Francisco State University
                and a systems engineer at Arch Insurance, where he builds automation and internal
                web tools for his team. Alongside his day job, he conducts cognitive science
                research at SFSU&apos;s RADLab under Dr. Suri, applying machine learning to study
                how humans represent semantic memory. In Fall 2026, he&apos;ll begin his M.A. in
                Psychology &mdash; Mind, Brain, Behavior &mdash; at SFSU. He has two cats,
                Seymour and Spork, who are awesome.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Welcome */}
        <section className="mb-16 md:mb-20 pt-10 border-t border-border">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 mb-6">
            Welcome
          </h2>
          <article className="prose-essay">
            <p>
              Social anxiety disorder shows up in everyday life as withdrawal, avoidance, and
              the dread of being judged &mdash; but the symptoms rarely tell the whole story.
              This portfolio explores social anxiety disorder (SAD) through the lens of
              attachment theory: the idea that the relationships we form in childhood shape
              the expectations we carry into every social interaction afterward.
            </p>
            <p>
              I came to this topic because it sits at the intersection of the two fields I
              move between &mdash; computer science and psychology. I&apos;m starting an M.A.
              in Psychology (Mind, Brain, Behavior) at SFSU in Fall 2026, and my interest in
              how internal models of self and others form, persist, and influence behavior
              pulled me toward attachment theory specifically. I wanted to understand SAD not
              as a static list of DSM criteria, but as something that develops out of an
              emotional history &mdash; patterns of caregiving, interpersonal expectations,
              and coping strategies that calcify over time.
            </p>
            <p>
              This matters to more people than the clinical literature sometimes suggests:
              students transitioning into college, adults navigating new relationships, and
              anyone who has ever felt that closeness costs more than it gives. The research
              I cite here doesn&apos;t prove that attachment causes social anxiety, but it
              does point to a developmental and relational framework worth taking seriously
              &mdash; both for understanding the disorder and for shaping how we treat it.
              My hope is that readers come away with a more compassionate picture of SAD and
              a clearer sense of why the relational history behind a symptom is worth asking
              about.
            </p>
          </article>
        </section>

        {/* 3. Discovery Essay */}
        <section className="mb-16 md:mb-20 pt-10 border-t border-border">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 mb-6">
            Discovery Essay
          </h2>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-2">
              Understanding Social Anxiety Disorder Through Attachment Theory
            </h3>
            <p className="text-sm text-muted-foreground italic">
              Avinh Huynh &middot; Department of English, San Francisco State University
            </p>
          </div>

          {/* Abstract */}
          <div className="mb-10 p-5 md:p-6 bg-accent/40 border-l-2 border-primary/40 rounded-r">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Abstract
            </p>
            <p className="text-[15px] leading-relaxed text-foreground/85">
              Social anxiety disorder is commonly defined through its symptoms, such as fear,
              avoidance, and distress in social situations. However, attachment theory gives
              insight into examining how symptoms of social anxiety disorder may have emerged
              developmentally. This paper discusses the associations between attachment theory
              and social anxiety disorder by examining interpersonal expectations, maladaptive
              emotion regulation, and behavioral inhibition in the context of attachment
              insecurity. In a survey of college freshmen transitioning to college, research
              shows that individuals with secure attachment had fewer social anxiety symptoms.
              Research further shows that, in an online survey, anxious attachment and avoidant
              attachment were associated with social anxiety symptoms and were partially
              mediated by maladaptive emotion regulation strategies. Lastly, longitudinal
              research shows an association with insecure attachment, behavioral inhibition,
              and social anxiety symptoms. This research, taken together, does not suggest
              causation between attachment theory and SAD, but instead highlights an
              association through interpersonal expectations of rejection, maladaptive emotion
              regulation, and vulnerability among behaviorally inhibited individuals.
              Attachment theory, therefore, offers a useful developmental and relational
              approach for understanding social anxiety disorder and informing treatment.
            </p>
            <p className="text-[13px] text-muted-foreground mt-4 italic">
              <span className="not-italic font-medium">Keywords:</span> attachment theory,
              social anxiety disorder, emotion regulation, behavioral inhibition, internal
              working models
            </p>
          </div>

          <article className="prose-essay">
            <p>
              &ldquo;Only when a sense of security is restored can a potential caregiver
              perceive others as not only potential sources of security and support but also
              as worthy human beings who themselves need and deserve sympathy and support&rdquo;
              (Mikulincer &amp; Shaver, 2016). This quote proposes a fundamental concept of
              attachment theory: security is learned. It propagates from person to person,
              from friend to friend, and from caregiver to child, shaping the expectations
              for interpersonal relations that persist into adulthood. The theory states that
              individuals raised in sensitive and reliable environments may become comfortable
              with closeness and with expressing distress to others, through the relationships
              between the child and the caregiver, and that these expectations may carry over
              into future relationships. Inversely, the theory adds that unreliable and
              insensitive care may lead to expectations of relationships as unreliable,
              unsafe, or rejecting. This is especially important when understanding social
              anxiety disorder (SAD) &ndash; a debilitating condition where social interaction
              can feel threatening and overwhelming. Driven by a fear of social judgment,
              rejection, or embarrassment, people with SAD tend to withdraw from social
              environments and interactions. Rather than viewing SAD as a set of symptoms,
              attachment theory looks deeper to explore how expectations for rejection,
              support, and emotional safety can contribute to the development of this
              disorder. Through the lens of attachment theory, the development of social
              anxiety disorder can be understood by exploring interpersonal expectations from
              insecure working models, maladaptive emotion regulation, and the interaction
              between attachment insecurity and behavioral inhibition.
            </p>

            <figure className="my-10 not-prose">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden ring-1 ring-border shadow-[0_20px_60px_-20px_rgba(234,88,12,0.25)]">
                <Image
                  src="/final-portfolio/attachment.jpg"
                  alt="A mother holding her smiling baby in soft window light"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 768px, 100vw"
                />
              </div>
              <figcaption className="text-xs text-muted-foreground italic mt-3 text-center px-4">
                The caregiver&ndash;child bond is where attachment theory begins:
                consistent, sensitive care builds a child&apos;s expectation that closeness is safe.
                <span className="not-italic"> Photo by Jonathan Borba on Unsplash.</span>
              </figcaption>
            </figure>

            <h3>Attachment Theory and Internal Working Models</h3>
            <p>
              Attachment theory states that the relationship between a child and caregiver
              shapes the child&apos;s expectations of themselves and others. When a child
              cries and receives consistent, sensitive care, the child may view the caregiver
              as a secure base they can trust in unfamiliar or distressing situations. From
              this security, the child may learn two things: (1) in a time of distress, they
              can receive external support that is helpful and comforting; (2) they themselves
              are worthy of this support. These two expectations reflect how the child views
              themselves (whether they are worthy of support) and how they view others
              (whether others may provide support), and the theory states that these views
              carry over into their interpersonal relationships in the future.
            </p>
            <p>
              These expectations are described as internal working models. The theory began
              with John Bowlby&apos;s initial proposition that child-caregiver interactions
              shape children&apos;s expectations (Bowlby, 1969), was later refined into three
              styles of infant attachment by Ainsworth et al. (1978), and then later into four
              by Main and Solomon (1986). Afterward, Bartholomew and Horowitz (1991) adapted
              this model into four types of adult attachment. Infant and adult attachment
              models use different terms, but both rely on the principal idea that earlier
              relational experiences shape expectations about the self and others. For
              clarity, this paper has simply labeled the internal working models as secure,
              anxious, avoidant, and fearful.
            </p>
            <p>
              Attachment theory proposes that the caregiver&apos;s sensitivity and consistency
              contribute to one of the four attachment styles. A positive self-view and a
              positive view of others are associated with secure attachment; a positive
              self-view and a negative view of others are associated with avoidant attachment;
              a negative self-view and a positive view of others are associated with anxious
              attachment; and a negative self-view and a negative view of others are
              associated with fearful attachment. Children with an inconsistent but partially
              sensitive upbringing may see that they can receive support from others (a
              positive view of others), but may believe that the support they receive is
              inconsistent because they are not deserving of it (a negative self-view). As
              the child grows older, they may maintain the belief that external support is
              available but that they are not worthy of it, leading them to be anxious about
              closeness, rejection, and relationship security. These internal working models
              are especially relevant in the context of social anxiety disorder because they
              may help illustrate how individuals with SAD might interpret social interactions
              and interpersonal relationships with expectations of rejection, judgment, or
              emotional insecurity.
            </p>

            <figure className="my-10 not-prose">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden ring-1 ring-border shadow-[0_20px_60px_-20px_rgba(234,88,12,0.25)]">
                <Image
                  src="/final-portfolio/withdrawal.jpg"
                  alt="A young man sitting on the floor by a curtained window, head resting on his knees"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 768px, 100vw"
                />
              </div>
              <figcaption className="text-xs text-muted-foreground italic mt-3 text-center px-4">
                Withdrawal and avoidance are common in social anxiety disorder &mdash; behaviors that
                ease anxiety in the moment but cut off the corrective experiences that could challenge it.
                <span className="not-italic"> Photo by M. on Unsplash.</span>
              </figcaption>
            </figure>

            <h3>Social Anxiety Disorder</h3>
            <p>
              Social anxiety disorder (SAD) is a persistent fear and anxiety toward social
              situations. SAD can be severe and debilitating: individuals with SAD may exclude
              themselves from social interaction and withdraw from relationships, even when
              this avoidance impairs daily functions (American Psychiatric Association, 2022).
              People with SAD may be intensely opposed to common social activities such as
              public speaking, meeting new people, dating, or other social circumstances,
              causing severe anxiety (National Institute of Mental Health, 2025). Because of
              this, people with SAD often use avoidance or safety behaviors that reduce
              immediate anxiety (Evans et al., 2021; Kim, 2005) but prevent opportunities for
              close relationships and corrective experiences that could challenge their fear
              of rejection. Since SAD centers on fearful expectations in social interactions,
              analyzing it with an understanding of attachment theory can be especially useful
              for exploring the disorder&apos;s development.
            </p>

            <h3>Interpersonal Expectations and Social Anxiety</h3>
            <p>
              The expectations of fear and rejection from others seen in social anxiety
              disorder can be explained through attachment theory because of how insecure
              internal working models set up expectations for interpersonal relations.
              Attachment theory states that children with available, accepting, and supportive
              relationships are more likely to develop secure attachment; in turn, they have
              the capacity to expect availability and support from others. Likewise, children
              who experience inconsistent, rejecting, or emotionally unavailable caregiving
              may be more likely to develop insecure attachment and may fear the same response
              patterns in other relationships. Carcedo et al. (2023) explored this by
              following 210 college freshmen as they transitioned to college. They measured
              parental attachment before the transition and then followed up six months later
              to assess satisfaction with interpersonal relationships, social anxiety, and
              loneliness in college. They found that insecure parental attachment predicted
              social anxiety symptoms, and subjects with higher symptoms of social anxiety
              had less ease in forming friendships and less satisfaction in the quality of
              their friendships. Although these results do not establish causation, they
              support the idea that early relationship security is meaningfully associated
              with later interpersonal functioning. Attachment theory would suggest that
              prior attachment insecurity may have shaped an insecure internal working model.
              This model may have contributed to unsupportive expectations for themselves,
              others, and shared relationships. When students transition to college, these
              negative expectations may make new relationships and maintaining them through
              social interaction feel more threatening, contributing to symptoms of social
              anxiety.
            </p>

            <h3>Emotion Regulation and Social Anxiety</h3>
            <p>
              Emotion regulation is the process of monitoring and modifying emotional
              reactions to achieve goals. Stress management is a common example of emotion
              regulation, in which a person might go for a walk, console a friend, or take a
              break with the goal of alleviating stress. Alternatively, they might choose an
              unhealthy or maladaptive strategy to regulate their emotions, such as dwelling
              on their stress, becoming depressed, anxious, or having impulsive outbursts.
              These are examples of emotion regulation strategies and can be either healthy
              or maladaptive depending on the context. Cognitive reappraisal is an emotion
              regulation strategy that involves reinterpreting a situation to a more positive
              perspective. For example, being angry after being cut off on the freeway, then
              reassessing the situation and wondering if it was an emergency, such as giving
              birth. Another example of an emotion regulation strategy is suppression, in
              which the emotion is still felt internally but masked externally. An example
              would be hearing an upsetting joke and forcing a laugh or smile to avoid making
              a scene. While cognitive reappraisal is generally considered healthy and
              effective at regulating emotions, and suppression is considered maladaptive and
              ineffective, the situation context matters: some situations are inappropriate
              for reappraisal and appropriate for suppression.
            </p>
            <p>
              Attachment theory gives context to the formation of social anxiety disorder by
              showing how both attachment and SAD are connected to emotion regulation
              strategies. People with secure attachment tend to use more effective and
              healthier coping strategies than those with insecure attachment. This is
              especially prevalent when investigating attachment anxiety, where people may
              become hyperaware of signs of rejection, reassurance, or abandonment. Read et
              al. (2018) conducted an online survey measuring attachment, emotion regulation
              strategies, and social anxiety. They found that attachment anxiety and
              attachment avoidance were positively associated with social anxiety symptoms.
              They also found that attachment anxiety was associated with lower cognitive
              reappraisal and higher suppression, and that these emotion regulation strategies
              partially mediated the relationship between attachment anxiety and social
              anxiety. From the data, it is evident that the relationships between attachment
              insecurity and social anxiety can be partially explained by emotion regulation
              strategies. Attachment theory would suggest that because people with insecure
              attachment may have difficulty trusting themselves and others during distress,
              they are less likely to seek support. Instead of seeking external support, they
              may find alternative coping mechanisms such as avoidance. In turn, if
              individuals with insecure attachment are less likely to use cognitive
              reappraisal, they may have more difficulty interpreting neutral cues, such as
              silence or awkwardness, in less threatening ways. Instead, they may interpret
              these cues as signs of rejection or judgment. Attachment theory would suggest
              that these avoidance tendencies and hyperawareness of signs of rejection may
              contribute to the development of SAD symptoms.
            </p>

            <figure className="my-10 not-prose">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden ring-1 ring-border shadow-[0_20px_60px_-20px_rgba(234,88,12,0.25)]">
                <Image
                  src="/final-portfolio/contemplation.jpg"
                  alt="A silhouetted figure standing alone before a brightly lit window in a dark room"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 768px, 100vw"
                />
              </div>
              <figcaption className="text-xs text-muted-foreground italic mt-3 text-center px-4">
                Behavioral inhibition &mdash; a quiet pull toward reserve and unfamiliarity &mdash;
                shapes how the same situation can feel manageable to one person and threatening to another.
                <span className="not-italic"> Photo by Sasha Freemind on Unsplash.</span>
              </figcaption>
            </figure>

            <h3>Behavioral Inhibition and Social Anxiety</h3>
            <p>
              Attachment may also influence risks for social anxiety disorder when understood
              with behavioral inhibition. Behavioral inhibition is a temperamental tendency
              for shyness, reserve, or sensitivity to unfamiliarity. Lewis-Morrarty et al.
              (2015) studied 165 subjects, measuring their attachment security at infancy and
              behavioral inhibition during childhood. Afterward, the researchers examined
              whether those earlier developmental factors predicted social anxiety symptoms
              during adolescence. They found that both infant attachment security and
              behavioral inhibition were significant predictors of social anxiety symptoms.
              While attachment security does not necessarily cause behavioral inhibition,
              attachment theory would suggest that it may shape whether responses to
              unfamiliar situations are seen as either manageable or threatening. Attachment
              theory would suggest that a natural tendency toward withdrawal, when combined
              with insecure attachment, may make avoidance more likely. Over time, this
              avoidance may prevent corrective social experiences and contribute to the
              development or maintenance of SAD symptoms.
            </p>

            <h3>Conclusion</h3>
            <p>
              Applying concepts of attachment theory to social anxiety disorder, the disorder
              can be analyzed by connecting symptoms of SAD to expectations in interpersonal
              relationships, emotion regulation, and behavioral inhibition. Negative
              interpersonal expectations from attachment insecurity mirror symptoms of SAD,
              such as fear of rejection, humiliation, or social interaction. In addition,
              attachment insecurity may influence emotion regulation by making individuals
              more likely to adopt maladaptive strategies, such as avoidance and suppression,
              rather than cognitive reappraisal. Finally, the intersection between attachment
              and behavioral inhibition may make some individuals especially vulnerable to
              developing social anxiety symptoms. Together, these findings suggest that
              applying attachment theory to SAD can help provide a more comprehensive
              understanding of its underlying mechanisms.
            </p>
            <p>
              By applying the principles of attachment theory to SAD, strategies for secure
              attachment can be used more proactively to address SAD symptoms. Zhang et al.
              (2023) conducted an experiment, priming one group with attachment security
              priming over two weeks and comparing it to a control group. After the two weeks,
              researchers found a decrease in social anxiety symptoms in the priming group
              with no significant change for the control group. Although this source does not
              prove long-term effects of attachment security on SAD, it suggests that
              attachment-based approaches may help reduce symptoms of social anxiety disorder.
              Therefore, attachment theory does not replace existing explanations of SAD, but
              it provides a useful developmental framework for understanding and treating the
              disorder.
            </p>

            <h3>References</h3>
            <div className="text-sm leading-relaxed text-foreground/80 space-y-3 pl-6 -indent-6">
              <p>
                Ainsworth, M. D. S., Blehar, M. C., Waters, E., &amp; Wall, S. N. (1978).
                <em> Patterns of attachment: A psychological study of the strange situation.</em>{" "}
                Lawrence Erlbaum.
              </p>
              <p>
                American Psychiatric Association. (2022).{" "}
                <em>Diagnostic and statistical manual of mental disorders</em> (5th ed., text
                rev. ed.). American Psychiatric Association Publishing.
              </p>
              <p>
                Bartholomew, K., &amp; Horowitz, L. M. (1991). Attachment styles among young
                adults: A test of a four-category model.{" "}
                <em>Journal of Personality and Social Psychology, 61</em>(2), 226&ndash;244.
              </p>
              <p>
                Bowlby, J. (1969). <em>Attachment and Loss: Vol. 1. Attachment.</em> Basic
                Books.
              </p>
              <p>
                Carcedo, R. J., V&aacute;zquez-Iglesias, P., Parade, S., Herreros-Faile, A.,
                &amp; Hervalejo, D. (2023). Social anxiety mediates the effect of attachment
                to parents on friendships and loneliness during the college transition.{" "}
                <em>Current Psychology, 42</em>, 10457&ndash;10467.
              </p>
              <p>
                Evans, R., Chiu, K., Clark, D. M., Waite, P., &amp; Leigh, E. (2021). Safety
                behaviours in social anxiety: An examination across adolescence.{" "}
                <em>Behaviour Research and Therapy, 144</em>, Article 103931.
              </p>
              <p>
                Kim, E.-J. (2005). The effect of the decreased safety behaviors on anxiety
                and negative thoughts in social phobics.{" "}
                <em>Journal of Anxiety Disorders, 19</em>(1), 69&ndash;86.
              </p>
              <p>
                Lewis-Morrarty, E., Degnan, K. A., Chronis-Tuscano, A., Pine, D. S.,
                Henderson, H. A., &amp; Fox, N. A. (2015). Infant attachment security and
                early childhood behavioral inhibition interact to predict adolescent social
                anxiety symptoms. <em>Child Development, 86</em>(2), 598&ndash;613.
              </p>
              <p>
                Main, M., &amp; Solomon, J. (1986). Discovery of an
                insecure-disorganized/disoriented attachment pattern. In T. B. Brazelton &amp;
                M. W. Yogman (Eds.), <em>Affective development in infancy</em> (pp.
                95&ndash;124). Ablex Publishing.
              </p>
              <p>
                Mikulincer, M., &amp; Shaver, P. R. (2016). The caregiving system: A review of
                theory and research. In J. Cassidy &amp; P. R. Shaver (Eds.),{" "}
                <em>Handbook of Attachment: Theory, Research, and Clinical Implications</em>{" "}
                (pp. 591&ndash;615). Guilford Press.
              </p>
              <p>
                National Institute of Mental Health. (2025).{" "}
                <em>Social Anxiety Disorder: What You Need to Know.</em>
              </p>
              <p>
                Read, D. L., Clark, G. I., Rock, A. J., &amp; Coventry, W. L. (2018). Adult
                attachment and social anxiety: The mediating role of emotion regulation
                strategies. <em>PLOS ONE, 13</em>(12), e0207514.
              </p>
              <p>
                Zhang, S., Tao, Y., Chen, Y., Zhang, P., &amp; Liu, X. (2023). The effects of
                repeated attachment security priming on social anxiety and attention bias: A
                randomized controlled trial. <em>Behavioral Sciences, 13</em>(5), 420.
              </p>
            </div>
          </article>
        </section>

        {/* 4. Reflective Mini-Essay */}
        <section className="mb-12 pt-10 border-t border-border">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 mb-6">
            Reflective Mini-Essay
          </h2>

          <article className="prose-essay">
            <p className="text-foreground/70">Dear Professor Fredericks,</p>

            <blockquote>
              The book was long, and difficult to read, and Klaus became more and more tired
              as the night wore on. Occasionally his eyes would close. He found himself
              reading the same sentence over and over. He found himself reading the same
              sentence over and over. He found himself reading the same sentence over and
              over. &mdash; Lemony Snicket, <em>The Bad Beginning</em>
            </blockquote>

            <p>
              Since I was a child, I&apos;ve always struggled with reading and writing. Like
              shoveling sand through a strainer, I watched it pool and well in my hands and
              then pour straight through, pudding at the bottom as undisturbed as before. I
              would scan the same text over and over, reading and rereading the same
              paragraphs, lines, and words to find my mind exhausted and my eyes hovering at
              the top of the same text again. <em>I need to focus harder</em>, I would think
              &mdash; <em>I need to read it faster, -read it again, -understand it better</em>;
              sand falling through the sieve. &ldquo;It was frustrating&rdquo; is what I
              didn&apos;t have the words to describe when I was younger. It was infuriating.
              This semester marks my third attempt at English 105, each enrollment reflecting
              its corresponding year, highlighting my experience and lessons I&apos;ve learned
              during my undergraduate degree. From the habits of mind, the two that resonated
              most with me are &ldquo;Thinking about your thinking&rdquo; and &ldquo;Creating,
              imagining, and innovating,&rdquo; showing my personal growth and identity in
              this English 105 course and my undergraduate degree.
            </p>

            <p>
              &ldquo;Thinking about your thinking&rdquo; to me is metacognition. It&apos;s
              self-analysis, and more importantly, redirection and growth. This concept always
              petrified me as a kid &mdash; the existentialism, self-esteem, and anxiety felt
              devastating. I was a nihilist, angry at the world for my conception, my
              upbringing, my family, the kids who bullied me in school, and the teachers who
              thought I was too much effort for their time. It was hollowing, so I blocked it
              out and pushed forward. I moved to college, learning and moving fast: landing a
              tech job at 18, getting married and divorced, living homeless in an RV, crashing
              two cars, and buying two more. Research applying machine learning in
              computational cognitive science, full-time work in DevOps and full-stack
              development, and completing a nine-course semester after fast-tracking my
              degree. And now I find myself again at the top of the page, a freshman in my
              master&apos;s next semester, wondering if all I&apos;ve been doing is pushing
              sand through a sieve. Why am I here? Was all of the work I put in just a form
              of distraction?
            </p>

            <p>
              This semester has been a chance for me to reflect on my thinking, identify who
              I want to be, and where I want to go. Instead of just pushing forward, I
              stopped to think, <em>where am I going and why? Why am I doing research? Why am
              I working here? Why am I trying so hard in my degree and pursuing a
              master&apos;s?</em> And my answer to all of the previous: because I want to;
              because it&apos;s fun for me and I look forward to it; because it makes me feel
              fulfilled and happy doing what I do. Doing research that assumes similarities
              between robots and humans makes a sort of cynical assumption about inhumanity
              towards sentience, but also about beauty and understanding. I am the sum of the
              choices I&apos;ve made in my life, and I am the superposition of all of the
              choices I will make in the future. This is to say, not so overimportantly, that
              my identity is both my past and what I choose to do in the future. If I want
              to learn how to cook, go for it &mdash; I&apos;m a cook now. If I want to learn
              to sing? &mdash; Sure, that&apos;s what I am. If I want to crush the word count
              on a bonus assignment created to boost the grades of freshmen, because
              I&apos;ve got something to say? So my response to myself about who I am is
              this: I&apos;m Avinh. I am someone who has struggled, who&apos;s made mistakes
              and who&apos;s succeeded beyond gratitude, who&apos;s tried my hardest in
              everything I did, who&apos;s temperamental at times, whose cats are the most
              awesome guys ever, whose partner I adore, and whose identity has been hardened,
              calloused, and refined into the person I am today by the lived experiences I
              have and the direction I choose to take it.
            </p>

            <p>
              This reflects my voice in writing this semester. I&apos;ve struggled with
              writing my whole life, and with each time, I have gotten better. Before this
              Spring 2026 English 105 course, when I would have read, &ldquo;write three
              paragraphs&rdquo;, I would think, <em>push sand, fill the hole</em>. It was a
              criterion to fill the way I thought my professor wanted it to be: concise,
              perfectly formatted, with a topic sentence, background, quote, analysis, and
              conclusion. To be fair, I&apos;ve been just fine filling out the rubric to a
              tee, but now I understand that there is more to it. The assignment is to show
              growth, tell a story, write from me to you &mdash; not filling paragraphs or
              quotas. &ldquo;Thinking about your thinking&rdquo; to me is growth through
              hardship. I think, I struggle, I change my approach, and I grow. In my
              freshman year of English, I tried, I failed, and I grew; my sophomore year, I
              tried again, I grew further; and my junior year now, I understand that I will
              continue to grow and fail to succeed. Like my academic journey has led me to
              growth and identity, the evolution of my writing has coincided, improving and
              establishing my voice. And with this growth, I lead into my second habit of
              mind&mdash;
            </p>

            <p>
              &ldquo;Creating, imagining, and innovating&rdquo; are my steps for the future.
              This course (and courses I have previously failed to see) taught me the
              creative freedom afforded by writing. This semester has taught me intent and
              direction. And, this degree has taught me grit and confidence. And all of
              these, including the writing in this course, have taught me my identity and
              voice. Writing not to fill a rubric, but my actual speaking voice and my true
              thoughts and feelings; not pushing sand, but building a sand castle. With the
              lessons I&apos;ve learned and the identity I built from them, I can create
              something that is completely and originally me. As I move into my master&apos;s,
              I am confident in the person that I have grown to be. Maybe I&apos;ll publish
              a dozen papers with my PI, or make a shit ton of money in tech. Maybe I&apos;ll
              crash out and own a farm, who knows &mdash;, but I&apos;ll do it
              unapologetically myself.
            </p>

            <blockquote>
              He does not always remain bent over the pages; he often leans back and closes
              his eyes over a line he has been reading again, and its meaning spreads through
              his blood. &mdash; Rainer Maria Rilke
            </blockquote>

            <p className="text-foreground/70 not-italic">
              Sincerely,<br />
              Avinh Huynh
            </p>
            <p className="text-sm text-muted-foreground italic">
              P.S: My master&apos;s is at SFSU, so say hi!
            </p>
          </article>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container-custom py-6 text-xs text-muted-foreground flex items-center justify-between">
          <span>Avinh Huynh &middot; Final Portfolio</span>
          <span>English 105 &middot; Spring 2026</span>
        </div>
      </footer>
    </div>
  );
}
