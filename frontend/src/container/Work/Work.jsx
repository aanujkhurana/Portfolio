import React, { useState, useEffect, useRef } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Work.scss';

const PAGE_SIZE = 6; // Number of works per page

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const workPortfolioRef = useRef(null);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      setFilterWork(works.filter((work) => work.tags.includes(item)));
      setCurrentPage(1); // Reset to first page after filtering
    }, 500);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    scrollToWorkPortfolio();
  };

  const scrollToWorkPortfolio = () => {
    if (workPortfolioRef.current) {
      workPortfolioRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(filterWork.length / PAGE_SIZE);

  // Slice works to display for current page
  const slicedWorks = filterWork.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span>
      </h2>

      <div className="app__work-filter" ref={workPortfolioRef}>
        {['Web App', 'Mobile App', 'Desktop App', 'Design', 'Other', 'All'].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : '' }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {slicedWorks.sort((a, b) => a._updatedAt.localeCompare(b._updatedAt)).map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <div className="app__work-hover app__flex">
                {work.projectLink && (
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 1.3] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                )}

                {work.codeLink && (
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 1.3] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                )}
              </div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Pagination Controls */}
      <div className="app__work-btns app__flex">
        <div className={`${currentPage === 1 ? 'disabled app__flex' : ''} app__flex`}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <HiChevronLeft />
        </div>

        <span>{`${currentPage} of ${totalPages}`}</span>

        <div className={`${currentPage === totalPages || totalPages === 0 ? 'disabled app__flex' : ''} app__flex`}
          onClick={() => handlePageChange(currentPage + 1)}
          >
          <HiChevronRight />
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
);
