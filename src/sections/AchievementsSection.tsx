import React from 'react';
import FadeIn from '../components/FadeIn';
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
      className="bg-dark px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 font-kanit"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Achievements
        </h2>
      </FadeIn>

      <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Achievements column */}
        <div>
          <FadeIn delay={0.1} y={20}>
            <h3 className="text-accent font-bold uppercase tracking-wider text-lg sm:text-xl mb-8">
              Awards & Recognition
            </h3>
          </FadeIn>

          <div className="space-y-0">
            {achievements.map((item, i) => {
              const Icon = achievementIcons[i % achievementIcons.length];
              return (
                <FadeIn key={item._id} delay={0.15 + i * 0.1} y={20}>
                  <div className="flex gap-4 sm:gap-6 py-6 border-b border-accent/10 group">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-accent/20 flex items-center justify-center group-hover:border-accent/50 transition-colors duration-300">
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
            <h3 className="text-accent font-bold uppercase tracking-wider text-lg sm:text-xl mb-8">
              Leadership & Activities
            </h3>
          </FadeIn>

          <div className="space-y-0">
            {activities.map((item, i) => {
              const Icon = activityIcons[i % activityIcons.length];
              return (
                <FadeIn key={item._id} delay={0.15 + i * 0.1} y={20}>
                  <div className="flex gap-4 sm:gap-6 py-6 border-b border-accent/10 group">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-accent/20 flex items-center justify-center group-hover:border-accent/50 transition-colors duration-300">
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
