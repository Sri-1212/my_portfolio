import React from 'react';
import FadeIn from '../components/FadeIn';
import GemIcon from '../components/GemIcon';
import type { Achievement, Activity } from '../data/fallback';
import { Award, Users, Trophy, Star } from 'lucide-react';

interface AchievementsSectionProps {
  achievements: Achievement[];
  activities: Activity[];
}

const achievementIcons = [Trophy, Award, Trophy, Star];
const activityIcons = [Users, Users, Users, Users];

const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  achievements,
  activities,
}) => {
  return (
    <section
      id="achievements"
      className="bg-dark px-5 sm:px-8 md:px-12 py-28 sm:py-36 md:py-48 font-kanit"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-24 md:mb-32 flex items-center justify-center gap-2.5 sm:gap-4"
          style={{ fontSize: 'clamp(2.5rem, 11vw, 160px)' }}
        >
          <GemIcon size={20} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
          <span>Achievements</span>
        </h2>
      </FadeIn>

      <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-20 lg:gap-28">
        {/* Achievements column */}
        <div>
          <FadeIn delay={0.1} y={20}>
            <h3 className="text-accent font-bold uppercase tracking-wider text-base sm:text-xl mb-6 sm:mb-10">
              Awards & Recognition
            </h3>
          </FadeIn>

          <div className="space-y-0">
            {achievements.map((item, i) => {
              const Icon = achievementIcons[i % achievementIcons.length];
              return (
                <FadeIn key={item._id} delay={0.15 + i * 0.1} y={20}>
                  <div className="flex gap-4 sm:gap-6 py-5 sm:py-7 border-b border-accent/10 group">
                    <div className="flex-shrink-0 w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-accent/20 flex items-center justify-center group-hover:border-accent/50 transition-colors duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent/50 group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-accent font-medium text-sm sm:text-base leading-tight mb-1">
                        {item.title}
                      </h4>
                      <p className="text-accent/50 font-light text-xs sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Activities column */}
        <div>
          <FadeIn delay={0.1} y={20}>
            <h3 className="text-accent font-bold uppercase tracking-wider text-base sm:text-xl mb-5 sm:mb-8">
              Leadership & Activities
            </h3>
          </FadeIn>

          <div className="space-y-0">
            {activities.map((item, i) => {
              const Icon = activityIcons[i % activityIcons.length];
              return (
                <FadeIn key={item._id} delay={0.15 + i * 0.1} y={20}>
                  <div className="flex gap-3.5 sm:gap-6 py-4 sm:py-6 border-b border-accent/10 group">
                    <div className="flex-shrink-0 w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-accent/20 flex items-center justify-center group-hover:border-accent/50 transition-colors duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent/50 group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-accent font-medium text-sm sm:text-base leading-tight mb-1">
                        {item.title}
                      </h4>
                      <p className="text-accent/50 font-light text-xs sm:text-sm">
                        {item.organization} · {item.period}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
