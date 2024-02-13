import React, { useState } from "react";
import "./AnimatedCard.css";
import { motion } from "framer-motion";

const AnimatedCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const animated = {
    layout: "position",
    animate: { opacity: 1 },
    transition: { delay: 0.3 },
    initial: { opacity: 0 },
  };

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-3 gap-2">
        <div>
          <motion.div
            className="card "
            layout
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {/* card start */}
            <motion.h3 layout="position">Expandable Card 🔥</motion.h3>
            

            <motion.p layout="position">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              sunt consequuntur sint ullam blanditiis alias et consectetur animi
              voluptates quibusdam.
            </motion.p>

            {isExpanded && (
              <>
                <motion.p {...animated}>
                  Perferendis dolorem! Voluptate iste reprehenderit voluptatem,
                  assumenda est commodi, repudiandae enim eveniet cumque
                  praesentium neque vero iure.
                </motion.p>

                <motion.div {...animated} className="btn-container">
                  <motion.button
                    onClick={() => {
                      setIsExpanded(!isExpanded);
                    }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </>
            )}
            {/* card end */}
          </motion.div>
        </div>
        <div>
          2
          <motion.div
            className="card"
            layout
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {/* card start */}
            <motion.h3 layout="position">Expandable Card 🔥</motion.h3>

            <motion.p layout="position">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              sunt consequuntur sint ullam blanditiis alias et consectetur animi
              voluptates quibusdam.
            </motion.p>

            {isExpanded && (
              <>
                <motion.p {...animated}>
                  Perferendis dolorem! Voluptate iste reprehenderit voluptatem,
                  assumenda est commodi, repudiandae enim eveniet cumque
                  praesentium neque vero iure.
                </motion.p>

                <motion.div {...animated} className="btn-container">
                  <motion.button
                    onClick={() => {
                      setIsExpanded(!isExpanded);
                    }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </>
            )}
            {/* card end */}
          </motion.div>
        </div>
        <div>
          3
          <motion.div
            className="card"
            layout
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {/* card start */}
            <motion.h3 layout="position">Expandable Card 🔥</motion.h3>

            <motion.p layout="position">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              sunt consequuntur sint ullam blanditiis alias et consectetur animi
              voluptates quibusdam.
            </motion.p>

            {isExpanded && (
              <>
                <motion.p {...animated}>
                  Perferendis dolorem! Voluptate iste reprehenderit voluptatem,
                  assumenda est commodi, repudiandae enim eveniet cumque
                  praesentium neque vero iure.
                </motion.p>

                <motion.div {...animated} className="btn-container">
                  <motion.button
                    onClick={() => {
                      setIsExpanded(!isExpanded);
                    }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </>
            )}
            {/* card end */}
          </motion.div>
        </div>
        <div>
          4
          <motion.div
            className="card"
            layout
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {/* card start */}
            <motion.h3 layout="position">Expandable Card 🔥</motion.h3>

            <motion.p layout="position">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              sunt consequuntur sint ullam blanditiis alias et consectetur animi
              voluptates quibusdam.
            </motion.p>

            {isExpanded && (
              <>
                <motion.p {...animated}>
                  Perferendis dolorem! Voluptate iste reprehenderit voluptatem,
                  assumenda est commodi, repudiandae enim eveniet cumque
                  praesentium neque vero iure.
                </motion.p>

                <motion.div {...animated} className="btn-container">
                  <motion.button
                    onClick={() => {
                      setIsExpanded(!isExpanded);
                    }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </>
            )}
            {/* card end */}
          </motion.div>
        </div>
        <div>
          5
          <motion.div
            className="card"
            layout
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {/* card start */}
            <motion.h3 layout="position">Expandable Card 🔥</motion.h3>

            <motion.p layout="position">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              sunt consequuntur sint ullam blanditiis alias et consectetur animi
              voluptates quibusdam.
            </motion.p>

            {isExpanded && (
              <>
                <motion.p {...animated}>
                  Perferendis dolorem! Voluptate iste reprehenderit voluptatem,
                  assumenda est commodi, repudiandae enim eveniet cumque
                  praesentium neque vero iure.
                </motion.p>

                <motion.div {...animated} className="btn-container">
                  <motion.button
                    onClick={() => {
                      setIsExpanded(!isExpanded);
                    }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </>
            )}
            {/* card end */}
          </motion.div>
        </div>
        <div>
          6
          <motion.div
            className="card"
            layout
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {/* card start */}
            <motion.h3 layout="position">Expandable Card 🔥</motion.h3>

            <motion.p layout="position">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              sunt consequuntur sint ullam blanditiis alias et consectetur animi
              voluptates quibusdam.
            </motion.p>

            {isExpanded && (
              <>
                <motion.p {...animated}>
                  Perferendis dolorem! Voluptate iste reprehenderit voluptatem,
                  assumenda est commodi, repudiandae enim eveniet cumque
                  praesentium neque vero iure.
                </motion.p>

                <motion.div {...animated} className="btn-container">
                  <motion.button
                    onClick={() => {
                      setIsExpanded(!isExpanded);
                    }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </>
            )}
            {/* card end */}
          </motion.div>
        </div>
        <div>
          7
          <motion.div
            className="card"
            layout
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {/* card start */}
            <motion.h3 layout="position">Expandable Card 🔥</motion.h3>

            <motion.p layout="position">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              sunt consequuntur sint ullam blanditiis alias et consectetur animi
              voluptates quibusdam.
            </motion.p>

            {isExpanded && (
              <>
                <motion.p {...animated}>
                  Perferendis dolorem! Voluptate iste reprehenderit voluptatem,
                  assumenda est commodi, repudiandae enim eveniet cumque
                  praesentium neque vero iure.
                </motion.p>

                <motion.div {...animated} className="btn-container">
                  <motion.button
                    onClick={() => {
                      setIsExpanded(!isExpanded);
                    }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </>
            )}
            {/* card end */}
          </motion.div>
        </div>
        <div>
          8
          <motion.div
            className="card"
            layout
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {/* card start */}
            <motion.h3 layout="position">Expandable Card 🔥</motion.h3>

            <motion.p layout="position">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              sunt consequuntur sint ullam blanditiis alias et consectetur animi
              voluptates quibusdam.
            </motion.p>

            {isExpanded && (
              <>
                <motion.p {...animated}>
                  Perferendis dolorem! Voluptate iste reprehenderit voluptatem,
                  assumenda est commodi, repudiandae enim eveniet cumque
                  praesentium neque vero iure.
                </motion.p>

                <motion.div {...animated} className="btn-container">
                  <motion.button
                    onClick={() => {
                      setIsExpanded(!isExpanded);
                    }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </>
            )}
            {/* card end */}
          </motion.div>
        </div>
        <div>
          9
          <motion.div
            className="card"
            layout
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {/* card start */}
            <motion.h3 layout="position">Expandable Card 🔥</motion.h3>

            <motion.p layout="position">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              sunt consequuntur sint ullam blanditiis alias et consectetur animi
              voluptates quibusdam.
            </motion.p>

            {isExpanded && (
              <>
                <motion.p {...animated}>
                  Perferendis dolorem! Voluptate iste reprehenderit voluptatem,
                  assumenda est commodi, repudiandae enim eveniet cumque
                  praesentium neque vero iure.
                </motion.p>

                <motion.div {...animated} className="btn-container">
                  <motion.button
                    onClick={() => {
                      setIsExpanded(!isExpanded);
                    }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </>
            )}
            {/* card end */}
          </motion.div>
        </div>
        <div>
          10
          <motion.div
            className="card"
            layout
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {/* card start */}
            <motion.h3 layout="position">Expandable Card 🔥</motion.h3>

            <motion.p layout="position">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              sunt consequuntur sint ullam blanditiis alias et consectetur animi
              voluptates quibusdam.
            </motion.p>

            {isExpanded && (
              <>
                <motion.p {...animated}>
                  Perferendis dolorem! Voluptate iste reprehenderit voluptatem,
                  assumenda est commodi, repudiandae enim eveniet cumque
                  praesentium neque vero iure.
                </motion.p>

                <motion.div {...animated} className="btn-container">
                  <motion.button
                    onClick={() => {
                      setIsExpanded(!isExpanded);
                    }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </>
            )}
            {/* card end */}
          </motion.div>
        </div>
        <div>
          11
          <motion.div
            className="card"
            layout
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {/* card start */}
            <motion.h3 layout="position">Expandable Card 🔥</motion.h3>

            <motion.p layout="position">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              sunt consequuntur sint ullam blanditiis alias et consectetur animi
              voluptates quibusdam.
            </motion.p>

            {isExpanded && (
              <>
                <motion.p {...animated}>
                  Perferendis dolorem! Voluptate iste reprehenderit voluptatem,
                  assumenda est commodi, repudiandae enim eveniet cumque
                  praesentium neque vero iure.
                </motion.p>

                <motion.div {...animated} className="btn-container">
                  <motion.button
                    onClick={() => {
                      setIsExpanded(!isExpanded);
                    }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </>
            )}
            {/* card end */}
          </motion.div>
        </div>
        <div>
          12
          <motion.div
            className="card"
            layout
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {/* card start */}
            <motion.h3 layout="position">Expandable Card 🔥</motion.h3>

            <motion.p layout="position">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              sunt consequuntur sint ullam blanditiis alias et consectetur animi
              voluptates quibusdam.
            </motion.p>

            {isExpanded && (
              <>
                <motion.p {...animated}>
                  Perferendis dolorem! Voluptate iste reprehenderit voluptatem,
                  assumenda est commodi, repudiandae enim eveniet cumque
                  praesentium neque vero iure.
                </motion.p>

                <motion.div {...animated} className="btn-container">
                  <motion.button
                    onClick={() => {
                      setIsExpanded(!isExpanded);
                    }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </>
            )}
            {/* card end */}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AnimatedCard;
