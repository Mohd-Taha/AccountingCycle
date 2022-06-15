-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 15, 2022 at 09:06 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `financialaccounting`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `contact` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `about` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `name`, `type`, `contact`, `email`, `address`, `about`) VALUES
(3, 'Cash', 'Asset', 'none', 'company@abc.com', 'My Office Address', 'Main Account For Every Bussiness'),
(4, 'Accounts Receivables', 'Asset', 'none', 'company@abc.com', 'My Office Address', '2nd Main Account For Every Business'),
(5, 'Supplies', 'Asset', 'none', 'company@abc.com', 'My Office Address', 'Requirement of Every Business'),
(6, 'F & F Properties', 'Asset', 'none', 'company@abc.com', 'Plot No# 313/5, SMCHS, Karachi', 'Owned Go Down For Business Operations.'),
(7, 'Acc. Dep F & F', 'Asset', 'none', 'company@abc.com', 'Plot No# 313/5, SMCHS, Karachi', 'Depreciation Account for Go Down '),
(8, 'Building', 'Asset', 'none', 'company@abc.com', 'Plot No# 786, SMCHS, Karachi', 'Owned Place For Office Operations.'),
(9, 'Acc. Dep Building', 'Asset', 'none', 'company@abc.com', 'Plot No# 786, SMCHS, Karachi', 'Depreciation Account for Building.'),
(10, 'Accounts Payables', 'Liability', 'none', 'company@abc.com', 'My Office Address', 'Galay Ka Phanda No# 1.'),
(11, 'Un Earned Service Revenue', 'Liability', 'none', 'company@abc.com', 'My Office Address', 'Galay Ka Phanda No# 2.'),
(12, 'Owner\'s Equity', 'Capital', 'none', 'company@abc.com', 'My Office Address', 'Boss Ka Hi Tu Ha Sb Kch....'),
(13, 'Owner\'s Drawings', 'Capital', 'none', 'company@abc.com', 'My Office Address', 'Boss Ny Kaha Tu Mtlb Poora Krny Ka...'),
(14, 'Service Revenue', 'Revenue', 'none', 'company@abc.com', 'My Office Address', 'Services Dengy Tu Paisa Bnyga.'),
(15, 'Salary Expense', 'Expense', 'none', 'company@abc.com', 'My Office Address', 'Kaam Krwaogy Tu Paisa Dena Pryga Na...'),
(16, 'Miscellaneous Expenses', 'Expense', 'none', 'company@abc.com', 'My Office Address', 'Kch Aagy Peechy Bh Kharcha Hoskta Hai Boss...'),
(17, 'Supplies Expense', 'Expense', 'none', 'company@abc.com', 'My Office Address', 'Supplies Aai Hi Kharch Hony K Lye Thi.'),
(18, 'Dep. Expense F & F', 'Expense', 'none', 'company@abc.com', 'My Office Address', 'Value Girygi Bh Tu Saal\'ha Saal'),
(19, 'Dep Expense Building', 'Expense', 'none', 'company@abc.com', 'My Office Address', 'Value Girygi Bh Tu Saal\'ha Saal'),
(20, 'Rental Expense', 'Expense', 'none', 'company@abc.com', 'Plot No# 101/1, Tariq Road, Karachi', 'Servant Quarter ( Accommodating 10 persons)');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `transactionDate` varchar(20) DEFAULT NULL,
  `debitAccounts` varchar(255) DEFAULT NULL,
  `debitValues` varchar(255) DEFAULT NULL,
  `creditAccounts` varchar(255) DEFAULT NULL,
  `creditValues` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `transactionDate`, `debitAccounts`, `debitValues`, `creditAccounts`, `creditValues`) VALUES
(6, '2022-06-15', 'Cash', '100000', 'Owner\'s Equity', '100000'),
(7, '2022-06-15', 'Rental Expense,Salary Expense', '20000,30000', 'Accounts Payables,Cash', '25000,25000'),
(8, '2022-06-15', 'Cash', '100000', 'Cash', '100000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
