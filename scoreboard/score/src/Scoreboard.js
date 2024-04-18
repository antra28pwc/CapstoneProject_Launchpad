


import React, { useEffect, useState } from "react";

const Scoreboard = () => {
    const [students, setStudents] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [pageSize, setPageSize] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch("http://localhost:5000/readAll");
                const data = await response.json();
                // Sort the students array in descending order of score    
                const sortedStudents = data.sort((a, b) => b.Finalscore - a.Finalscore);
                // Add rank property to each student    
                const rankedStudents = sortedStudents.map((student, index) => ({
                    ...student,
                    rank: index + 1
                }));
                setStudents(rankedStudents);
            } catch (error) {
                console.error(error);
            }
        };

        fetchStudents();

        // Auto-refresh every 2 seconds  
        const interval = setInterval(fetchStudents, 2000);

        // Clean up the interval on component unmount  
        return () => clearInterval(interval);
    }, []);

    const handleSearch = (event) => {
        setSearchName(event.target.value);
        setCurrentPage(1); // Reset current page when search changes    
    };

    const filteredStudents = students.filter((student) =>
        student.Name.toLowerCase().includes(searchName.toLowerCase())
    );

    // Calculate pagination    
    const totalEntries = filteredStudents.length;
    const totalPages = Math.ceil(totalEntries / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentEntries = filteredStudents.slice(startIndex, endIndex);

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    return (
        <div>
            <h1>Student Ranking</h1>
            <div className="search-container">
                <label htmlFor="search" className="search-label">
                    Search by Name:
                </label>
                <input
                    type="text"
                    id="search"
                    value={searchName}
                    onChange={handleSearch}
                    className="search-input"
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Enrolment Id</th>
                        <th>Student Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {currentEntries.map((student) => (
                        <tr key={student.Enrolmentid}>
                            <td>{student.rank}</td>
                            <td>{student.Enrolmentid}</td>
                            <td>{student.Name}</td>
                            <td>{student.Finalscore}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button
                    disabled={currentPage === 1}
                    onClick={goToPreviousPage}
                >
                    Previous
                </button>
                <span>{currentPage}</span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={goToNextPage}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Scoreboard;  
