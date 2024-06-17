import { Button } from '../ui/button'
import Feature from '../ui/Feature'
import Title from '../ui/Title'

export default function Features() {
  return (
    <section className="section_container pb-24 pt-14 md:pt-20">
        <div className="flex flex-col gap-14 md:gap-24">
          <Title
            leftTitle="Our"
            rightTitle="Features"
            description="This very extraordinary feature, can make learning activities more efficient"
          />
          <div className="flex flex-col gap-20">
            {/* feature 1 */}
            <div className="flex flex-col gap-6 md:flex-row md:justify-between lg:gap-10">
              <div className="flex-1">
                <img
                  src="./videocall.png"
                  alt="videocall image"
                  className="bg-cover bg-center"
                />
              </div>
              <div className="flex flex-col gap-8 lg:gap-10">
                <h3 className="w-full max-w-sm text-2xl font-semibold text-accent sm:text-3xl">
                  A <span className="text-primary">user interface</span>{" "}
                  designed for the classroom
                </h3>
                <div className="flex flex-col gap-6 lg:gap-8">
                  {/* item 1 */}
                  <div className="flex gap-5">
                    <div className="flex w-full max-w-fit items-center justify-center rounded-full p-2 shadow-2xl">
                      <img
                        src="./icon/square1.svg"
                        alt="logo square"
                        className="w-[22px] bg-cover bg-center"
                      />
                    </div>
                    <p className="w-full max-w-xs leading-relaxed opacity-70">
                      Teachers don't get lost in the grid view and have a
                      dedicated Podium space.
                    </p>
                  </div>
                  {/* item 2 */}
                  <div className="flex gap-5">
                    <div className="flex w-full max-w-fit items-center justify-center rounded-full p-2 shadow-2xl">
                      <img
                        src="./icon/square2.svg"
                        alt="logo square 2"
                        className="w-[22px] bg-cover bg-center"
                      />
                    </div>
                    <p className="w-full max-w-xs leading-relaxed opacity-70">
                      TA's and presenters can be moved to the front of the
                      class.
                    </p>
                  </div>
                  {/* item 3 */}
                  <div className="flex gap-5">
                    <div className="flex w-full max-w-fit items-center justify-center rounded-full p-2 shadow-2xl">
                      <img
                        src="./icon/users.svg"
                        alt="logo square"
                        className="w-[22px] bg-cover bg-center"
                      />
                    </div>
                    <p className="w-full max-w-xs leading-relaxed opacity-70">
                      Teachers can easily see all students and class data at one
                      time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* feature 2 */}
            <Feature
              image="./learner.png"
              title="Tools For Teachers And Learners"
              highlightText="Tools"
              description="Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit."
              imageLeft={false}
            />
            {/* feature 3 */}
            <Feature
              image="./assessment.png"
              title="Assessments,Quizzes,Tests"
              highlightText="Quizzes"
              description="Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook."
            />
            {/* feature 4 */}
            <Feature
              image="./gradeClass.png"
              title="Class Management Tools for Educators"
              highlightText="Class Management"
              description="Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time."
              imageLeft={false}
            />
            {/* feature 5 */}
            <Feature
              image="./discussion.png"
              title="One-on-One Discussions"
              highlightText="Discussions"
              description="Teachers and teacher assistants can talk with students privately without leaving the Zoom environment."
            />
          </div>
          <Button
            className="mx-auto w-full max-w-fit rounded-full border-primary px-8 py-5 text-primary hover:bg-primary hover:text-white"
            variant="outline"
          >
            See more feature
          </Button>
        </div>
      </section>
  )
}
