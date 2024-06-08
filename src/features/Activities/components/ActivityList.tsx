import { ActivityCard } from "@/components/biz";

export default async function ActivityList({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const activities = {
    data: [
      {
        id: 1,
        name: "Call For Participants",
        registration_end: "05-31-2024",
        slug: "call-for-participants",
      },
      {
        id: 2,
        name: "Youth Productive Class",
        registration_end: "06-09-2024",
        slug: "Youth-Productive-Class",
      },
      {
        id: 3,
        name: "Personality Assessment",
        registration_end: "07-14-2024",
        slug: "Personality Assessment",
      },
      {
        id: 4,
        name: "Innovator Class & Mentorship",
        registration_end: "08-17-2024",
        slug: "Innovator Class & Mentorship",
      },
      {
        id: 5,
        name: "Leadership in Action Summit 2024",
        registration_end: "08-25-2024",
        slug: "Leadership in Action Summit 2024",
      },
    ],
  };

  return (
    <>
      <div className="w-full justify-items-center px-5 py-12 max-w-6xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-6">
        {activities?.data.map((activity) => (
          <ActivityCard
            key={activity.id}
            activityName={activity.name}
            registrationEnd={activity.registration_end}
            slug={activity.slug}
          />
        ))}
      </div>
    </>
  );
}
